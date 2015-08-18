'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var markdown = require('../helpers/markdown');

var Code = require('./Code');

module.exports = (function (_ReactCSS$Component) {
  _inherits(Markdown, _ReactCSS$Component);

  function Markdown() {
    _classCallCheck(this, Markdown);

    _get(Object.getPrototypeOf(Markdown.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Markdown, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          markdown: {
            fontSize: '17px',
            lineHeight: '24px',
            color: 'rgba(0,0,0,.47)'
          }
        }
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var newLines = children;

      var codes = [];
      for (var i = 0; i < markdown.isCode(children).length; i++) {
        var codeBlock = markdown.isCode(children)[i];
        newLines = newLines.replace(codeBlock[1], '|Code:' + i + '|');
        codes[i] = React.createElement(Code, { file: codeBlock[2], condensed: this.props.condensed, borders: true });
      }

      var markdownFile = [];
      for (var i = 0; i < newLines.split('\n').length; i++) {
        var line = newLines.split('\n')[i];
        if (markdown.isCodeBlock(line)) {
          markdownFile.push(React.createElement(
            'div',
            { key: i },
            codes[markdown.codeNumber(line)]
          ));
        } else {
          markdownFile.push(React.createElement('div', { key: i, style: this.styles().markdown, className: 'markdown text', dangerouslySetInnerHTML: { __html: markdown.render(line) } }));
        }
      }

      return React.createElement(
        'div',
        { style: this.styles().markdown },
        markdownFile
      );
    }
  }]);

  return Markdown;
})(ReactCSS.Component);