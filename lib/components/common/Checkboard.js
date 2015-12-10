'use strict';Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _checkboardCache = {};

function renderCheckboard(c1, c2, size) {
  if (typeof document == 'undefined') return null; // Dont Render On Server
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

function getCheckboard(c1, c2, size) {
  var key = c1 + ',' + c2 + ',' + size;

  if (_checkboardCache[key]) {
    return _checkboardCache[key];
  } else {
    var checkboard = renderCheckboard(c1, c2, size);
    _checkboardCache[key] = checkboard;
    return checkboard;
  }
}

var Checkboard = (function (_ReactCSS$Component) {
  _inherits(Checkboard, _ReactCSS$Component);

  function Checkboard() {
    _classCallCheck(this, Checkboard);

    _get(Object.getPrototypeOf(Checkboard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Checkboard, [{
    key: 'classes',
    value: function classes() {
      var background = getCheckboard(this.props.white, this.props.grey, this.props.size);
      return {
        'default': {
          grid: {
            Absolute: '0 0 0 0',
            background: 'url(' + background + ') center left'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', { style: this.styles().grid, ref: 'grid' });
    }
  }]);

  return Checkboard;
})(_reactcss2['default'].Component);

exports.Checkboard = Checkboard;

Checkboard.defaultProps = {
  size: 8,
  white: '#fff',
  grey: '#e6e6e6'
};

exports['default'] = Checkboard;