const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['./docs/index.js'],
  output: {
    path: path.join(__dirname, 'docs/build'),
    filename: 'bundle.js',
    publicPath: 'docs/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /react-context/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /modules/],
        loaders: ['babel-loader'],
      }, {
        test: /\.jsx$/,
        exclude: [/node_modules/, /modules/],
        loaders: ['jsx-loader', 'babel-loader'],
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.md$/,
        loaders: ['html-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoErrorsPlugin(),
  ],
  quiet: true,
}
