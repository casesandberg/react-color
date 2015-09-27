var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var modify = require('gulp-modify');
var babel = require('gulp-babel');
var mapStyles = require('react-map-styles');

var scriptsPath = path.join(__dirname, '../modules');

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
