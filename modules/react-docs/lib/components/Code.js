'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var markdown = require('../helpers/markdown');
var context = require('react-context');

var _require = require('../../../react-material-design');

var Tile = _require.Tile;
var Raised = _require.Raised;

var Code = (function (_ReactCSS$Component) {
  _inherits(Code, _ReactCSS$Component);

  function Code() {
    _classCallCheck(this, Code);

    _get(Object.getPrototypeOf(Code.prototype), 'constructor', this).call(this);
  }

  _createClass(Code, [{
    key: 'classes',
    value: function classes() {
      return {
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
      };
    }
  }, {
    key: 'styles',
    value: function styles() {
      return this.css({
        'condensed': this.context.width < 500
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var code = markdown.getBody(this.props.file);
      var args = markdown.getArgs(this.props.file);
      var colorCoded = markdown.renderCode('```\n' + code + '```').trim();
      var lineCount = colorCoded.split('\n').length;

      var lines;
      if (args.lineDecoration) {
        lines = args.lineDecoration;
      } else {
        lines = [];
        for (var i = 1; i < lineCount; i++) {
          lines.push(React.createElement(
            'div',
            { key: i },
            i
          ));
        }
      }

      return React.createElement(
        Raised,
        null,
        React.createElement(
          Tile,
          this.styles().Tile,
          React.createElement(
            'div',
            { style: this.styles().numbers },
            lines
          ),
          React.createElement(
            'div',
            { style: this.styles().center },
            React.createElement(
              'style',
              null,
              '\n              .rendered pre{\n                margin: 0;\n              }\n              .rendered p{\n                margin: 0;\n              }\n            '
            ),
            React.createElement('div', { className: 'rendered', dangerouslySetInnerHTML: { __html: colorCoded } })
          )
        )
      );
    }
  }]);

  return Code;
})(ReactCSS.Component);

Code.contextTypes = context.subscribe(['width']);

module.exports = Code;