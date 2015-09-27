import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './../webpack.config.js';

gulp.task('docs:dev', () => {
  let port = 9100;
  let docs = Object.create(webpackConfig);

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
  }).listen(port, 'localhost', err => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:' + port + '/');
  });
});

gulp.task('docs:dist', done => {

  let build = Object.create(webpackConfig);

  build.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
  ];

  webpack(build, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);

    done();
  });
});
