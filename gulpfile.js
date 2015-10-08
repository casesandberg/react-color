require('babel/register');
require('require-dir')('./gulp');
require('gulp').task('dist', ['docs:dist', 'lib:dist', 'modules:dist']);
