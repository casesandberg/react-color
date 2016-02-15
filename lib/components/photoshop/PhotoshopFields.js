'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPicker = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoshopPicker = exports.PhotoshopPicker = function (_ReactCSS$Component) {
  _inherits(PhotoshopPicker, _ReactCSS$Component);

  function PhotoshopPicker() {
    _classCallCheck(this, PhotoshopPicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoshopPicker).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
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
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
                marginBottom: '5px',
                fontSize: '13px',
                paddingLeft: '3px',
                marginRight: '10px'
              },
              label: {
                left: '0',
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
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
                marginBottom: '6px',
                fontSize: '13px',
                paddingLeft: '3px'
              },
              label: {
                position: 'absolute',
                top: '0',
                left: '0',
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
    key: 'handleChange',
    value: function handleChange(data) {
      if (data['#']) {
        _color2.default.isValidHex(data['#']) && this.props.onChange(data['#']);
      } else if (data.r || data.g || data.b) {
        this.props.onChange({
          r: data.r || this.props.rgb.r,
          g: data.g || this.props.rgb.g,
          b: data.b || this.props.rgb.b
        });
      } else if (data.h || data.s || data.v) {
        this.props.onChange({
          h: data.h || this.props.hsv.h,
          s: data.s || this.props.hsv.s,
          v: data.v || this.props.hsv.v
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { is: 'fields' },
        _react2.default.createElement(_common.EditableInput, { is: 'Input', label: 'h', value: Math.round(this.props.hsv.h), onChange: this.handleChange }),
        _react2.default.createElement(_common.EditableInput, { is: 'Input', label: 's', value: Math.round(this.props.hsv.s * 100), onChange: this.handleChange }),
        _react2.default.createElement(_common.EditableInput, { is: 'Input', label: 'v', value: Math.round(this.props.hsv.v * 100), onChange: this.handleChange }),
        _react2.default.createElement('div', { is: 'divider' }),
        _react2.default.createElement(_common.EditableInput, { is: 'Input', label: 'r', value: this.props.rgb.r, onChange: this.handleChange }),
        _react2.default.createElement(_common.EditableInput, { is: 'Input', label: 'g', value: this.props.rgb.g, onChange: this.handleChange }),
        _react2.default.createElement(_common.EditableInput, { is: 'Input', label: 'b', value: this.props.rgb.b, onChange: this.handleChange }),
        _react2.default.createElement('div', { is: 'divider' }),
        _react2.default.createElement(_common.EditableInput, { is: 'Hex', label: '#', value: this.props.hex, onChange: this.handleChange }),
        _react2.default.createElement(
          'div',
          { is: 'fieldSymbols' },
          _react2.default.createElement(
            'div',
            { is: 'symbol' },
            '°'
          ),
          _react2.default.createElement(
            'div',
            { is: 'symbol' },
            '%'
          ),
          _react2.default.createElement(
            'div',
            { is: 'symbol' },
            '%'
          )
        )
      );
    }
  }]);

  return PhotoshopPicker;
}(_reactcss2.default.Component);

exports.default = PhotoshopPicker;