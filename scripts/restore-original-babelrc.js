const fs = require('fs')
const path = require('path')

const babelRCBackup = fs
  .readFileSync(path.join(__dirname, '../.babelrc_backup'))
  .toString()

fs.writeFileSync(
  path.join(__dirname, '../.babelrc'),
  babelRCBackup
)
