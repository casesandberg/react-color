'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleSwatch = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleSwatch = exports.CircleSwatch = function CircleSwatch(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: '28px',
        height: '28px',
        margin: '0 14px 14px 0',
        transform: 'scale(1)',
        transition: '100ms transform ease'
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 14px ' + props.color,
        transition: '100ms box-shadow ease'
      }
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      Swatch: {
        boxShadow: 'inset 0 0 0 3px ' + props.color
      }
    }
  }, props);

  var handleClick = function handleClick(color, e) {
    props.onClick && props.onClick(color, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, { style: styles.Swatch, color: props.color, onClick: handleClick })
  );
};

exports.default = (0, _reactcss.hover)(CircleSwatch);