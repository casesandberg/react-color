'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderPointer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderPointer = exports.SliderPointer = function (_ReactCSS$Component) {
  _inherits(SliderPointer, _ReactCSS$Component);

  function SliderPointer() {
    _classCallCheck(this, SliderPointer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SliderPointer).apply(this, arguments));
  }

  _createClass(SliderPointer, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            width: '14px',
            height: '14px',
            borderRadius: '6px',
            transform: 'translate(-7px, -1px)',
            backgroundColor: 'rgb(248, 248, 248)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: this.styles().picker });
    }
  }]);

  return SliderPointer;
}(_reactcss2.default.Component);

exports.default = SliderPointer;