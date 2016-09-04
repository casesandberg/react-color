'use strict'

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var webpackConfig = require('../webpack.config.js')

let port = 9100
let docs = Object.create(webpackConfig)

docs.entry = ['webpack-dev-server/client?http://localhost:' + port, 'webpack/hot/dev-server', docs.entry[0]]

docs.module.loaders[0].loaders.unshift('react-hot-loader')
docs.module.loaders[1].loaders.unshift('react-hot-loader')

docs.devtool = 'eval'
docs.debug = true

new WebpackDevServer(webpack(docs), {
  publicPath: '/' + docs.output.publicPath,
  hot: true,
  stats: {
    cached: false,
    cachedAssets: false,
    colors: true,
    exclude: ['node_modules', 'components'],
  },
}).listen(port, 'localhost', err => {
  if (err) throw new Error('webpack-dev-server', err)
  console.log('[webpack-dev-server]', 'http://localhost:' + port + '/')
})
