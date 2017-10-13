const path = require('path')
const webpack = require('webpack')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

module.exports = {
    entry: {
        vendor: [
            //   'q',
            //   'axios',
            'element-ui',
            'raven-js',
            'axios',
            // 'vue-baidu-map',
            //   'vue/dist/vue.common.js',
            'vue-router',
            'vuex',
            // 'babel-polyfill'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../static/js'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules\/(?!(autotrack|dom-utils))/
            }
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            libraryTarget: 'commonjs2',
            name: '[name]_library',
        }),
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            uglifyJS: {
                output: {
                    comments: false,
                    beautify: false
                },
                compress: {
                    warnings: false,
                    drop_console: true
                }
            }
        }),
    ]
}