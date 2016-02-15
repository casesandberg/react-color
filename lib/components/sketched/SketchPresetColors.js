'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchPresetColors = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SketchPresetColors = exports.SketchPresetColors = function (_ReactCSS$Component) {
  _inherits(SketchPresetColors, _ReactCSS$Component);

  function SketchPresetColors() {
    _classCallCheck(this, SketchPresetColors);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SketchPresetColors).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
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
          colors.push(_react2.default.createElement(
            'div',
            { key: color, is: 'li', ref: color, onClick: this.handleClick.bind(null, color) },
            _react2.default.createElement(
              'div',
              { style: { background: color } },
              ' ',
              _react2.default.createElement('div', { is: 'square' }),
              ' '
            )
          ));
        }
      }

      return _react2.default.createElement(
        'div',
        { is: 'colors' },
        colors
      );
    }
  }]);

  return SketchPresetColors;
}(_reactcss2.default.Component);

exports.default = SketchPresetColors;