'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwatchesColor = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwatchesColor = exports.SwatchesColor = function (_ReactCSS$Component) {
  _inherits(SwatchesColor, _ReactCSS$Component);

  function SwatchesColor() {
    _classCallCheck(this, SwatchesColor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SwatchesColor).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SwatchesColor, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          color: {
            width: '40px',
            height: '24px',
            cursor: 'pointer',
            background: this.props.color,
            marginBottom: '1px'
          },
          check: {
            fill: '#fff',
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
        active: {
          check: {
            display: 'block'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick(this.props.color);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { is: 'color', ref: 'color', onClick: this.handleClick },
        _react2.default.createElement(
          'div',
          { is: 'check' },
          _react2.default.createElement(
            'svg',
            { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24' },
            _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
          )
        )
      );
    }
  }]);

  return SwatchesColor;
}(_reactcss2.default.Component);

exports.default = SwatchesColor;