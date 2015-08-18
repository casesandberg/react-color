'use strict';

var Remarkable = require('remarkable');
var hljs = require('highlight.js');
var regularMd = new Remarkable();
var codeMd = new Remarkable({
  highlight: function highlight(str) {
    try {
      return hljs.highlight('javascript', str).value;
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = {

  render: function render(text) {
    return regularMd.render(text);
  },

  renderCode: function renderCode(text) {
    return codeMd.render(text);
  },

  getArgs: function getArgs(code) {
    var args = {};
    if (code.indexOf('---') > -1) {
      var match = /---([\s\S]*?)---\n([\s\S]*)/.exec(code);
      var argSplit = match[1].trim().split('\n');

      for (var i = 0; i < argSplit.length; i++) {
        var arg = argSplit[i];
        var regex = /(.+?): (.+)/.exec(arg);
        args[regex[1]] = regex[2];
      }

      code = match[2];
    }

    return args;
  },

  getBody: function getBody(code) {
    if (code.indexOf('---') > -1) {
      var match = /---([\s\S]*?)---\n([\s\S]*)/.exec(code);
      return match[2];
    } else {
      return code;
    }
  },

  isCode: function isCode(text) {
    var array = [];
    var reg = new RegExp(/(```.*\n([\s\S]*?)```)/g);
    var match;
    while ((match = reg.exec(text)) !== null) {
      array.push(match);
    }

    return array;
  },

  isCodeBlock: function isCodeBlock(string) {
    if (string.indexOf('|Code:') > -1) {
      return true;
    } else {
      return false;
    }
  },

  isSubSection: function isSubSection(string) {
    if (string.split('-')[0].indexOf('.') === -1) {
      return true;
    } else {
      return false;
    }
  },

  codeNumber: function codeNumber(string) {
    return (/\|Code:(.+?)\|/.exec(string)[1]
    );
  }

};