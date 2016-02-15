import gulp from 'gulp'
import fs from 'fs'
import path from 'path'
import es from 'event-stream'
import modify from 'gulp-modify'
import babel from 'gulp-babel'
import mapStyles from 'react-map-styles'

let scriptsPath = path.join(__dirname, '../modules')

let getFolders = (dir) => {
  return fs.readdirSync(dir)
    .filter(function (file) {
      return fs.statSync(path.join(dir, file)).isDirectory()
    })
}

gulp.task('modules:dist', () => {
  let folders = getFolders(scriptsPath)

  let tasks = folders.map(folder => {
    return gulp.src(path.join(scriptsPath, folder, 'src/**/*.js'))
      .pipe(modify({
        fileModifier: (file, contents) => {
          return mapStyles(contents)
        },
      }))
      .pipe(babel())
      .pipe(gulp.dest(path.join(scriptsPath, folder, 'lib')))
  })

  return es.concat.apply(null, tasks)
})
