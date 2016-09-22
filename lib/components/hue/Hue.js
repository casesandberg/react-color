'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HuePicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

var _HuePointer = require('./HuePointer');

var _HuePointer2 = _interopRequireDefault(_HuePointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HuePicker = exports.HuePicker = function HuePicker(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      hue: {
        position: 'relative',
        width: props.width,
        height: props.height
      },
      Hue: {
        radius: '2px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    props.onChange && props.onChange(data, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.hue, className: 'hue-picker' },
    _react2.default.createElement(_common.Hue, _extends({}, styles.Hue, props, {
      pointer: _HuePointer2.default,
      onChange: handleChange
    }))
  );
};

HuePicker.defaultProps = {
  width: '316px',
  height: '16px'
};

exports.default = (0, _common.ColorWrap)(HuePicker);