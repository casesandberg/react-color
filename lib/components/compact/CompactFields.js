'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompactColor = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompactColor = exports.CompactColor = function (_ReactCSS$Component) {
  _inherits(CompactColor, _ReactCSS$Component);

  function CompactColor() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, CompactColor);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CompactColor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
      if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        });
      } else {
        _this.props.onChange({
          hex: data,
          source: 'hex'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CompactColor, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          fields: {
            display: 'flex',
            paddingBottom: '6px',
            paddingRight: '5px',
            position: 'relative'
          },
          active: {
            position: 'absolute',
            top: '6px',
            left: '5px',
            height: '9px',
            width: '9px',
            background: '#' + this.props.hex
          },
          Hex: {
            style: {
              wrap: {
                flex: '6',
                position: 'relative'
              },
              input: {
                width: '80%',
                padding: '0px',
                paddingLeft: '20%',
                border: 'none',
                outline: 'none',
                background: 'none',
                fontSize: '12px',
                color: '#333',
                height: '16px'
              },
              label: {
                display: 'none'
              }
            }
          },
          RGB: {
            style: {
              wrap: {
                flex: '3',
                position: 'relative'
              },
              input: {
                width: '70%',
                padding: '0px',
                paddingLeft: '30%',
                border: 'none',
                outline: 'none',
                background: 'none',
                fontSize: '12px',
                color: '#333',
                height: '16px'
              },
              label: {
                position: 'absolute',
                top: '3px',
                left: '0px',
                lineHeight: '16px',
                textTransform: 'uppercase',
                fontSize: '12px',
                color: '#999'
              }
            }
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.styles().fields, className: 'flexbox-fix' },
        _react2.default.createElement('div', { style: this.styles().active }),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Hex, { label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange })),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().RGB, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange })),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().RGB, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange })),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().RGB, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange }))
      );
    }
  }]);

  return CompactColor;
}(_reactcss2.default.Component);

exports.default = CompactColor;