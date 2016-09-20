'use strict'

var webpack = require('webpack')
var webpackConfig = require('../webpack.config.js')

let build = Object.create(webpackConfig)
build.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.DedupePlugin(),
]
webpack(build, (err, stats) => {
  if (err) throw new Error('webpack-dev-server', err)
})
