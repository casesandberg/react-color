'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkboard = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Checkboard = exports.Checkboard = function (_ReactCSS$Component) {
  _inherits(Checkboard, _ReactCSS$Component);

  function Checkboard() {
    _classCallCheck(this, Checkboard);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkboard).apply(this, arguments));
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
      return _react2.default.createElement('div', { style: this.styles().grid, ref: 'grid' });
    }
  }]);

  return Checkboard;
}(_reactcss2.default.Component);

Checkboard.defaultProps = {
  size: 8,
  white: '#fff',
  grey: '#e6e6e6'
};

exports.default = Checkboard;