'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var color = require('../../helpers/color');

var _require = require('../common');

var EditableInput = _require.EditableInput;

var PhotoshopPicker = (function (_ReactCSS$Component) {
  _inherits(PhotoshopPicker, _ReactCSS$Component);

  function PhotoshopPicker() {
    _classCallCheck(this, PhotoshopPicker);

    _get(Object.getPrototypeOf(PhotoshopPicker.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
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
        color.isValidHex(data['#']) && this.props.onChange(data['#']);
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
      return React.createElement(
        'div',
        { style: this.styles().fields },
        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'h', value: Math.round(this.props.hsv.h), onChange: this.handleChange })),
        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 's', value: Math.round(this.props.hsv.s * 100), onChange: this.handleChange })),
        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'v', value: Math.round(this.props.hsv.v * 100), onChange: this.handleChange })),
        React.createElement('div', { style: this.styles().divider }),
        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange })),
        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange })),
        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange })),
        React.createElement('div', { style: this.styles().divider }),
        React.createElement(EditableInput, _extends({}, this.styles().Hex, { label: '#', value: this.props.hex, onChange: this.handleChange })),
        React.createElement(
          'div',
          { style: this.styles().fieldSymbols },
          React.createElement(
            'div',
            { style: this.styles().symbol },
            '°'
          ),
          React.createElement(
            'div',
            { style: this.styles().symbol },
            '%'
          ),
          React.createElement(
            'div',
            { style: this.styles().symbol },
            '%'
          )
        )
      );
    }
  }]);

  return PhotoshopPicker;
})(ReactCSS.Component);

module.exports = PhotoshopPicker;