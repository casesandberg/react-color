'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubSwatch = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSwatch = exports.GithubSwatch = function GithubSwatch(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: '25px',
        height: '25px'
      }
    },
    'hover': {
      swatch: {
        position: 'relative',
        zIndex: '2',
        outline: '2px solid #fff',
        boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
      }
    }
  }, props);

  var handleClick = function handleClick(color, e) {
    props.onClick && props.onClick(color, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, { color: props.color, onClick: handleClick })
  );
};

exports.default = (0, _reactcss.hover)(GithubSwatch);