'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _markdown = require('../helpers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _Code = require('./Code');

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markdown = function (_React$Component) {
  _inherits(Markdown, _React$Component);

  function Markdown() {
    _classCallCheck(this, Markdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Markdown).apply(this, arguments));
  }

  _createClass(Markdown, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          markdown: {
            fontSize: '17px',
            lineHeight: '24px',
            color: 'rgba(0,0,0,.47)'
          }
        }
      });

      var children = this.props.children;

      var newLines = children;

      var codes = [];
      for (var i = 0; i < _markdown2.default.isCode(children).length; i++) {
        var codeBlock = _markdown2.default.isCode(children)[i];
        newLines = newLines.replace(codeBlock[1], '|Code:' + i + '|');
        codes[i] = _react2.default.createElement(_Code2.default, { file: codeBlock[2], condensed: this.props.condensed, borders: true });
      }

      var markdownFile = [];
      for (var i = 0; i < newLines.split('\n').length; i++) {
        var line = newLines.split('\n')[i];
        if (_markdown2.default.isCodeBlock(line)) {
          markdownFile.push(_react2.default.createElement(
            'div',
            { key: i },
            codes[_markdown2.default.codeNumber(line)]
          ));
        } else {
          markdownFile.push(_react2.default.createElement('div', { key: i, style: styles.markdown, className: 'markdown text', dangerouslySetInnerHTML: { __html: _markdown2.default.render(line) } }));
        }
      }

      return _react2.default.createElement(
        'div',
        { style: styles.markdown },
        markdownFile
      );
    }
  }]);

  return Markdown;
}(_react2.default.Component);

;

exports.default = Markdown;