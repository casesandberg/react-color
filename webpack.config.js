var path = require('path')
var webpack = require('webpack')

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
    alias: {
      'react-color': path.resolve(__dirname, './src/index.js'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'remarkable': path.resolve(__dirname, './modules/remarkable'),
      'highlight.js': path.resolve(__dirname, './modules/highlight.js'),
      'tinycolor2': path.resolve(__dirname, './modules/tinycolor2'),
    },
    extensions: ['', '.js', '.jsx'],
    fallback: [path.resolve(__dirname, './modules')],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoErrorsPlugin(),
  ],
  quiet: true,
}
