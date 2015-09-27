var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var babel = require('gulp-babel');
var mapStyles = require('react-map-styles');
var modify = require('gulp-modify');
var foreach = require('gulp-foreach');
var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var gulp = require('gulp');

gulp.task('docs:dev', function(callback) {
  var port = 9100;
  var docs = Object.create(webpackConfig);

  docs.entry = ['webpack-dev-server/client?http://localhost:' + port, 'webpack/hot/dev-server', docs.entry[0]];

  docs.module.loaders[0].loaders.unshift('react-hot-loader');
  docs.module.loaders[1].loaders.unshift('react-hot-loader');

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

gulp.task('docs:dist', function(done) {

  var build = Object.create(webpackConfig);

  build.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
  ];

  webpack(build, function(err, stats) {
    if (err) {
      throw new Error(err);
    }

    done();
  });
});

gulp.task('lib:dist', function(done) {
  return gulp.src('./src/**/*')
    .pipe(modify({
      fileModifier: function(file, contents) {
        return mapStyles(contents);
      },
    }))
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

var scriptsPath = './modules/';

var getFolders = function(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
};

gulp.task('modules:dist', function() {
  var folders = getFolders(scriptsPath);

  var tasks = folders.map(function(folder) {
    return gulp.src(path.join(scriptsPath, folder, 'src/**/*.js'))
      .pipe(modify({
        fileModifier: function(file, contents) {
          return mapStyles(contents);
        },
      }))
      .pipe(babel())
      .pipe(gulp.dest(path.join(scriptsPath, folder, 'lib')));
  });

  return es.concat.apply(null, tasks);
});

gulp.task('prod', ['docs:dist', 'lib:dist', 'modules:dist']);
