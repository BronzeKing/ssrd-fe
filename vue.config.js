var webpackConfig = process.env.NODE_ENV === 'development'
  ? require('./build/webpack.dev.conf')
  : require('./build/webpack.prod.conf')

module.exports = {
  configureWebpack: webpackConfig
}

