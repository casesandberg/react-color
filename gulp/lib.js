import gulp from 'gulp'
import modify from 'gulp-modify'
import babel from 'gulp-babel'
import mapStyles from 'react-map-styles'
import rimraf from 'rimraf'
import gutil from 'gulp-util'

gulp.task('clean:dist', () => {
  return rimraf.sync('./lib', {}, gutil.log)
})

gulp.task('lib:dist', ['clean:dist'], () => {
  return gulp.src('./src/**/*')
    .pipe(modify({
      fileModifier: (file, contents) => {
        return mapStyles(contents)
      },
    }))
    .pipe(babel())
    .pipe(gulp.dest('lib'))
})
