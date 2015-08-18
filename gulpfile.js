var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var babel = require('gulp-babel');
var mapStyles = require('react-map-styles');
var modify = require('gulp-modify');

gulp.task('docs', function(callback) {
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

gulp.task('build', function(done) {

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

gulp.task('bundle', function(done) {
  return gulp.src('./src/**/*')
    .pipe(modify({
      fileModifier: function(file, contents) {
        return mapStyles(contents);
      },
    }))
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('bundle-material', function(done) {
  return gulp.src('./modules/react-material-design/src/**/*')
    .pipe(modify({
      fileModifier: function(file, contents) {
        return mapStyles(contents);
      },
    }))
    .pipe(babel())
    .pipe(gulp.dest('./modules/react-material-design/lib'));
});

gulp.task('bundle-docs', function(done) {
  return gulp.src('./modules/react-docs/src/**/*')
    .pipe(modify({
      fileModifier: function(file, contents) {
        return mapStyles(contents);
      },
    }))
    .pipe(babel())
    .pipe(gulp.dest('./modules/react-docs/lib'));
});

gulp.task('bundle-layout', function(done) {
  return gulp.src('./modules/react-basic-layout/src/**/*')
    .pipe(modify({
      fileModifier: function(file, contents) {
        return mapStyles(contents);
      },
    }))
    .pipe(babel())
    .pipe(gulp.dest('./modules/react-basic-layout/lib'));
});

gulp.task('bundle-move', function(done) {
  return gulp.src('./modules/react-move/src/**/*')
    .pipe(modify({
      fileModifier: function(file, contents) {
        return mapStyles(contents);
      },
    }))
    .pipe(babel())
    .pipe(gulp.dest('./modules/react-move/lib'));
});

gulp.task('prod', ['build', 'bundle', 'bundle-material', 'bundle-docs', 'bundle-layout', 'bundle-move']);
