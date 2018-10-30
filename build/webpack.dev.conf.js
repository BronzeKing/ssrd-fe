var utils = require("./utils");
var webpack = require("webpack");
var config = require("../config");
var merge = require("webpack-merge");
var baseWebpackConfig = require("./webpack.base.conf");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
var TypedocWebpackPlugin = require("typedoc-webpack-plugin");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const { VueLoaderPlugin } = require('vue-loader')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ["./build/dev-client"].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: "#cheap-module-eval-source-map",
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "process.env": config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
              chunksSortMode: 'none',
            inject: true
        }),
        new FriendlyErrorsPlugin(),
        // new TypedocWebpackPlugin({
        // name: "Ssrd",
        // mode: "file",
        // includeDeclarations: false,
        // ignoreCompilerErrors: true,
        // excludeExternals: true,
        // exclude: "**/node_modules/**/*.*"
        // })
        new ParallelUglifyPlugin({
            cacheDir: ".cache/",
            uglifyJS: {
                output: {
                    comments: false,
                    beautify: false
                },
                compress: {
                    warnings: false
                }
            }
        })
    ]
});
