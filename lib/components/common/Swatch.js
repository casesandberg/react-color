'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatch = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swatch = exports.Swatch = function Swatch(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        background: props.color,
        height: '100%',
        width: '100%',
        cursor: 'pointer'
      }
    },
    'custom': {
      swatch: props.style
    }
  }, 'custom');

  var handleClick = function handleClick(e) {
    props.onClick && props.onClick(props.color, e);
  };

  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });
};

exports.default = Swatch;