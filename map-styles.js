var fs = require('fs')
var transform = require('react-map-styles')

function readFiles(dirname) {
  fs.readdir(dirname, function(err, filenames) {
    filenames.forEach(function(filename) {
      fs.stat(dirname + filename, function(err, stat) {
        if (stat && stat.isDirectory()) {
          readFiles(dirname + filename + '/')
        } else {
          fs.readFile(dirname + filename, 'utf-8', function(err, content) {
            fs.writeFile(dirname + filename, transform(content), function (err) {
              if (err) return console.log(err)
            })
          })
        }
      })
    })
  })
}

readFiles('./lib/')
