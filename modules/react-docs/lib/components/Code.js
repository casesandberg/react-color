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

var _reactContext = require('react-context');

var _reactContext2 = _interopRequireDefault(_reactContext);

var _reactMaterialDesign = require('../../../react-material-design');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Code).call(this));
  }

  _createClass(Code, [{
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          shortCodeBlock: {
            display: 'inline-block'
          },
          shortCode: {
            padding: '14px 16px'
          },
          head: {
            borderRadius: '2px 2px 0 0',
            background: '#fafafa'
          },
          files: {
            display: 'inline-block'
          },
          Files: {
            align: 'none',
            color: '#666'
          },
          center: {
            fontFamily: 'Monaco',
            fontSize: '14px',
            lineHeight: '19px',
            color: 'rgba(0,0,0,.77)'
          },
          numbers: {
            fontSize: '14px',
            lineHeight: '19px',
            display: 'inline-block',
            textAlign: 'right',
            color: 'rgba(0,0,0,.20)',
            userSelect: 'none',
            paddingLeft: '7px'
          }
        },
        'condensed': {
          Tile: {
            condensed: true
          },
          center: {
            paddingTop: '16px',
            paddingBottom: '16px',
            fontSize: '13px',
            lineHeight: '15px',
            overflowX: 'scroll'
          },
          numbers: {
            paddingTop: '16px',
            fontSize: '13px',
            lineHeight: '15px'
          }
        }
      }, {
        'condensed': this.context.width < 500
      });

      var code = _markdown2.default.getBody(this.props.file);
      var args = _markdown2.default.getArgs(this.props.file);
      var colorCoded = _markdown2.default.renderCode('```\n' + code + '```').trim();
      var lineCount = colorCoded.split('\n').length;

      var lines;
      if (args.lineDecoration) {
        lines = args.lineDecoration;
      } else {
        lines = [];
        for (var i = 1; i < lineCount; i++) {
          lines.push(_react2.default.createElement(
            'div',
            { key: i },
            i
          ));
        }
      }

      return _react2.default.createElement(
        _reactMaterialDesign.Raised,
        null,
        _react2.default.createElement(
          _reactMaterialDesign.Tile,
          { style: styles.Tile },
          _react2.default.createElement(
            'div',
            { style: styles.numbers },
            lines
          ),
          _react2.default.createElement(
            'div',
            { style: styles.center },
            _react2.default.createElement(
              'style',
              null,
              '\n              .rendered pre{\n                margin: 0;\n              }\n              .rendered p{\n                margin: 0;\n              }\n            '
            ),
            _react2.default.createElement('div', { className: 'rendered', dangerouslySetInnerHTML: { __html: colorCoded } })
          )
        )
      );
    }
  }]);

  return Code;
}(_react2.default.Component);

Code.contextTypes = _reactContext2.default.subscribe(['width']);

exports.default = Code;