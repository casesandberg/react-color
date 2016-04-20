'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchPresetColors = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SketchPresetColors = exports.SketchPresetColors = function (_ReactCSS$Component) {
  _inherits(SketchPresetColors, _ReactCSS$Component);

  function SketchPresetColors() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, SketchPresetColors);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SketchPresetColors)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleClick = function (hex) {
      _this.props.onClick({
        hex: hex,
        source: 'hex'
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
            margin: '0px 10px 10px 0px',
            verticalAlign: 'top',
            cursor: 'pointer'
          },
          square: {
            borderRadius: '3px',
            width: '16px',
            height: '16px',
            boxShadow: 'inset 0px 0px 0px 1px rgba(0,0,0,.15)'
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
    key: 'render',
    value: function render() {
      var colors = [];
      if (this.props.colors) {
        for (var i = 0; i < this.props.colors.length; i++) {
          var color = this.props.colors[i];
          colors.push(_react2.default.createElement(
            'div',
            { key: color, style: this.styles().li, ref: color, onClick: this.handleClick.bind(null, color) },
            _react2.default.createElement(
              'div',
              { style: { background: color } },
              ' ',
              _react2.default.createElement('div', { style: this.styles().square }),
              ' '
            )
          ));
        }
      }

      return _react2.default.createElement(
        'div',
        { style: this.styles().colors },
        colors
      );
    }
  }]);

  return SketchPresetColors;
}(_reactcss2.default.Component);

exports.default = SketchPresetColors;