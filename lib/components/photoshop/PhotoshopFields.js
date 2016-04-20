'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoshopPicker = exports.PhotoshopPicker = function (_ReactCSS$Component) {
  _inherits(PhotoshopPicker, _ReactCSS$Component);

  function PhotoshopPicker() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, PhotoshopPicker);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PhotoshopPicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
      if (data['#']) {
        _color2.default.isValidHex(data['#']) && _this.props.onChange({
          hex: data['#'],
          source: 'hex'
        });
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        });
      } else if (data.h || data.s || data.v) {
        _this.props.onChange({
          h: data.h || _this.props.hsv.h,
          s: data.s || _this.props.hsv.s,
          v: data.v || _this.props.hsv.v,
          source: 'hsv'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PhotoshopPicker, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          fields: {
            paddingTop: '5px',
            paddingBottom: '9px',
            width: '80px',
            position: 'relative'
          },
          divider: {
            height: '5px'
          },
          Input: {
            style: {
              wrap: {
                position: 'relative'
              },
              input: {
                marginLeft: '40%',
                width: '40%',
                height: '18px',
                border: '1px solid #888888',
                boxShadow: 'inset 0px 1px 1px rgba(0,0,0,.1), 0px 1px 0px 0px #ECECEC',
                marginBottom: '5px',
                fontSize: '13px',
                paddingLeft: '3px',
                marginRight: '10px'
              },
              label: {
                left: '0px',
                width: '34px',
                textTransform: 'uppercase',
                fontSize: '13px',
                height: '18px',
                lineHeight: '22px',
                position: 'absolute'
              }
            }
          },
          Hex: {
            style: {
              wrap: {
                position: 'relative'
              },
              input: {
                marginLeft: '20%',
                width: '80%',
                height: '18px',
                border: '1px solid #888888',
                boxShadow: 'inset 0px 1px 1px rgba(0,0,0,.1), 0px 1px 0px 0px #ECECEC',
                marginBottom: '6px',
                fontSize: '13px',
                paddingLeft: '3px'
              },
              label: {
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '14px',
                textTransform: 'uppercase',
                fontSize: '13px',
                height: '18px',
                lineHeight: '22px'
              }
            }
          },
          fieldSymbols: {
            position: 'absolute',
            top: '5px',
            right: '-7px',
            fontSize: '13px'
          },
          symbol: {
            height: '20px',
            lineHeight: '22px',
            paddingBottom: '7px'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.styles().fields },
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'h', value: Math.round(this.props.hsv.h), onChange: this.handleChange })),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 's', value: Math.round(this.props.hsv.s * 100), onChange: this.handleChange })),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'v', value: Math.round(this.props.hsv.v * 100), onChange: this.handleChange })),
        _react2.default.createElement('div', { style: this.styles().divider }),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange })),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange })),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange })),
        _react2.default.createElement('div', { style: this.styles().divider }),
        _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Hex, { label: '#', value: this.props.hex, onChange: this.handleChange })),
        _react2.default.createElement(
          'div',
          { style: this.styles().fieldSymbols },
          _react2.default.createElement(
            'div',
            { style: this.styles().symbol },
            '°'
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().symbol },
            '%'
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().symbol },
            '%'
          )
        )
      );
    }
  }]);

  return PhotoshopPicker;
}(_reactcss2.default.Component);

exports.default = PhotoshopPicker;