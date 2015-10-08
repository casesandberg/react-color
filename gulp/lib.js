import gulp from 'gulp';
import modify from 'gulp-modify';
import babel from 'gulp-babel';
import mapStyles from 'react-map-styles';

gulp.task('lib:dist', () => {
  return gulp.src('./src/**/*')
    .pipe(modify({
      fileModifier: (file, contents) => {
        return mapStyles(contents);
      },
    }))
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});
