var hljs = require('./highlight');

hljs.registerLanguage('javascript', require('./languages/javascript'));

module.exports = hljs;
