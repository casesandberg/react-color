var gulp = require('gulp');
var modify = require('gulp-modify');
var babel = require('gulp-babel');
var mapStyles = require('react-map-styles');

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
