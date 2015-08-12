var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('docs', function(callback) {
  var port = 9100;
  var docs = Object.create(webpackConfig);

  docs.entry = ['webpack-dev-server/client?http://localhost:' + port, 'webpack/hot/dev-server', docs.entry[0]];

  docs.devtool = 'eval';
  docs.debug = true;

  new WebpackDevServer(webpack(docs), {
    publicPath: '/' + docs.output.publicPath,
    hot: true,
    stats: {
      cached: false,
      cachedAssets: false,
      colors: true,
      exclude: ['node_modules', 'components'],
    },
  }).listen(port, 'localhost', function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:' + port + '/');
  });
});
