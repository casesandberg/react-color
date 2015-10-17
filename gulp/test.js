import gulp from 'gulp';
import mocha from 'gulp-mocha';
import gutil from 'gulp-util';
import babel from 'gulp-babel';

gulp.task('test', () => {
  return gulp.src('./test/**/*.js')
    .pipe(mocha({ compilers: { js: babel } }))
    .on('error', gutil.log);
});

gulp.task('test:watch', () => {
  gulp.watch(['./test/**/*.js', './src/**/*.js'], ['test']);
});
