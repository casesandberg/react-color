'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPointerCircle = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function (_ReactCSS$Component) {
  _inherits(PhotoshopPointerCircle, _ReactCSS$Component);

  function PhotoshopPointerCircle() {
    _classCallCheck(this, PhotoshopPointerCircle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoshopPointerCircle).apply(this, arguments));
  }

  _createClass(PhotoshopPointerCircle, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          triangle: {
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '4px 0 4px 6px',
            borderColor: 'transparent transparent transparent #fff',
            position: 'absolute',
            top: '1px',
            left: '1px'
          },
          triangleBorder: {
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '5px 0 5px 8px',
            borderColor: 'transparent transparent transparent #555'
          },

          left: {
            Extend: 'triangleBorder',
            transform: 'translate(-13px, -4px)'
          },
          leftInside: {
            Extend: 'triangle',
            transform: 'translate(-8px, -5px)'
          },

          right: {
            Extend: 'triangleBorder',
            transform: 'translate(20px, -14px) rotate(180deg)'
          },
          rightInside: {
            Extend: 'triangle',
            transform: 'translate(-8px, -5px)'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { is: 'pointer' },
        _react2.default.createElement(
          'div',
          { is: 'left' },
          _react2.default.createElement('div', { is: 'leftInside' })
        ),
        _react2.default.createElement(
          'div',
          { is: 'right' },
          _react2.default.createElement('div', { is: 'rightInside' })
        )
      );
    }
  }]);

  return PhotoshopPointerCircle;
}(_reactcss2.default.Component);

exports.default = PhotoshopPointerCircle;