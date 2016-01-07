'use strict';Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var SketchPresetColors = (function (_ReactCSS$Component) {
  _inherits(SketchPresetColors, _ReactCSS$Component);

  function SketchPresetColors() {
    _classCallCheck(this, SketchPresetColors);

    _get(Object.getPrototypeOf(SketchPresetColors.prototype), 'constructor', this).call(this);

    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(SketchPresetColors, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          colors: {
            marginRight: '-10px',
            marginLeft: '-10px',
            paddingLeft: '10px',
            paddingTop: '10px',
            borderTop: '1px solid #eee'
          },
          li: {
            borderRadius: '3px',
            overflow: 'hidden',
            position: 'relative',
            display: 'inline-block',
            margin: '0 10px 10px 0',
            verticalAlign: 'top',
            cursor: 'pointer'
          },
          square: {
            borderRadius: '3px',
            width: '16px',
            height: '16px',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
          }
        },
        'no-presets': {
          colors: {
            display: 'none'
          }
        }
      };
    }
  }, {
    key: 'styles',
    value: function styles() {
      return this.css({
        'no-presets': !this.props.colors || !this.props.colors.length
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(hex) {
      this.props.onClick(hex);
    }
  }, {
    key: 'render',
    value: function render() {
      var colors = [];
      if (this.props.colors) {
        for (var i = 0; i < this.props.colors.length; i++) {
          var color = this.props.colors[i];
          colors.push(_react2['default'].createElement(
            'div',
            { key: color, style: this.styles().li, ref: color, onClick: this.handleClick.bind(null, color) },
            _react2['default'].createElement(
              'div',
              { style: { background: color } },
              ' ',
              _react2['default'].createElement('div', { style: this.styles().square }),
              ' '
            )
          ));
        }
      }

      return _react2['default'].createElement(
        'div',
        { style: this.styles().colors },
        colors
      );
    }
  }]);

  return SketchPresetColors;
})(_reactcss2['default'].Component);

exports.SketchPresetColors = SketchPresetColors;
exports['default'] = SketchPresetColors;