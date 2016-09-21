'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockSwatches = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockSwatches = exports.BlockSwatches = function BlockSwatches(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  var handleClick = function handleClick(color, e) {
    props.onClick && props.onClick(color, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    (0, _map2.default)(props.colors, function (c) {
      return _react2.default.createElement(_common.Swatch, { color: c, key: c, style: styles.swatch, onClick: handleClick });
    }),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports.default = BlockSwatches;