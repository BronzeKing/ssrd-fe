var path = require("path");
var utils = require("./utils");
var webpack = require("webpack");
var config = require("../config");
var merge = require("webpack-merge");
var baseWebpackConfig = require("./webpack.base.conf");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
var QiniuPlugin = require("qiniu-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");

// 图片体积压缩插件
let ImageminPlugin = require("imagemin-webpack-plugin").default;

var qiniuPlugin = new QiniuPlugin({
    ACCESS_KEY: "NtO1B6ILEpI33oQq1NpiCSAzpgaASsrmmJzNQsNG",
    SECRET_KEY: "Z2ztsscMNJZVZiZpDc8UCZnChMR46ncGQpuIrld9",
    bucket: "mumumu",
    path: "[hash]"
});

var env = process.env.NODE_ENV === "testing" ? require("../config/test.env") : config.build.env;

var webpackConfig = merge(baseWebpackConfig, {
            mode: 'production',
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    devtool: config.build.productionSourceMap ? "#source-map" : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath("js/[name].js"),
        //chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
        publicPath: "https://static.mum5.cn/[hash]/"
    },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors',
        },
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        }
      }
    },
    runtimeChunk: { name: 'runtime' }
  },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        qiniuPlugin,
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "process.env": env
        }),
        // extract css into its own file
    new MiniCssExtractPlugin({
    filename: utils.assetsPath('css/[name].[contenthash].css'),
    allChunks: true,
    }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: process.env.NODE_ENV === "testing" ? "index.html" : config.build.index,
            template: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            chunksSortMode: "dependency"
        }),
        // split vendor js into its own file
        // Make sure that the plugin is after any plugins that add images
        // 图片体积压缩插件
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== "production", // Disable during development
            test: /\.(jpe?g|png|gif|svg)$/i,
            minFileSize: 70000, // 大于70k的会被压缩
            jpegtran: { progressive: true }
        }),

        // webpack.DllPlugin.js
        // new webpack.DllReferencePlugin({
        //   context: path.resolve(__dirname, ".."),
        //   manifest: require("./vendor-manifest.json")
        // }),

        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../static"),
                to: config.build.assetsSubDirectory,
                ignore: [".*"]
            }
        ])
    ]
});

if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require("compression-webpack-plugin");

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: new RegExp("\\.(" + config.build.productionGzipExtensions.join("|") + ")$"),
            threshold: 10240,
            minRatio: 0.8
        })
    );
}

if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
