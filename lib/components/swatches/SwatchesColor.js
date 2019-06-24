'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwatchesColor = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _common = require('../common');

var _CheckIcon = require('@icons/material/CheckIcon');

var _CheckIcon2 = _interopRequireDefault(_CheckIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesColor = exports.SwatchesColor = function SwatchesColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover,
      first = _ref.first,
      last = _ref.last,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        background: color,
        marginBottom: '1px'
      },
      check: {
        color: _color2.default.getContrastingColor(color),
        marginLeft: '8px',
        display: 'none'
      }
    },
    'first': {
      color: {
        overflow: 'hidden',
        borderRadius: '2px 2px 0 0'
      }
    },
    'last': {
      color: {
        overflow: 'hidden',
        borderRadius: '0 0 2px 2px'
      }
    },
    'active': {
      check: {
        display: 'block'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      check: {
        color: '#333'
      }
    },
    'transparent': {
      check: {
        color: '#333'
      }
    }
  }, {
    first: first,
    last: last,
    active: active,
    'color-#FFFFFF': color === '#FFFFFF',
    'transparent': color === 'transparent'
  });

  return _react2.default.createElement(
    _common.Swatch,
    {
      color: color,
      style: styles.color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    _react2.default.createElement(
      'div',
      { style: styles.check },
      _react2.default.createElement(_CheckIcon2.default, null)
    )
  );
};

exports.default = SwatchesColor;