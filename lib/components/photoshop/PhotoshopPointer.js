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

var PhotoshopPointerCircle = (function (_ReactCSS$Component) {
  _inherits(PhotoshopPointerCircle, _ReactCSS$Component);

  function PhotoshopPointerCircle() {
    _classCallCheck(this, PhotoshopPointerCircle);

    _get(Object.getPrototypeOf(PhotoshopPointerCircle.prototype), 'constructor', this).apply(this, arguments);
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
      return _react2['default'].createElement(
        'div',
        { style: this.styles().pointer },
        _react2['default'].createElement(
          'div',
          { style: this.styles().left },
          _react2['default'].createElement('div', { style: this.styles().leftInside })
        ),
        _react2['default'].createElement(
          'div',
          { style: this.styles().right },
          _react2['default'].createElement('div', { style: this.styles().rightInside })
        )
      );
    }
  }]);

  return PhotoshopPointerCircle;
})(_reactcss2['default'].Component);

exports.PhotoshopPointerCircle = PhotoshopPointerCircle;
exports['default'] = PhotoshopPointerCircle;