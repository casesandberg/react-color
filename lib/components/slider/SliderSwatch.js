'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderSwatch = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderSwatch = exports.SliderSwatch = function (_ReactCSS$Component) {
  _inherits(SliderSwatch, _ReactCSS$Component);

  function SliderSwatch() {
    _classCallCheck(this, SliderSwatch);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SliderSwatch).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SliderSwatch, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          swatch: {
            height: '12px',
            background: 'hsl(' + this.props.hsl.h + ', 50%, ' + this.props.offset * 100 + '%)',
            cursor: 'pointer'
          }
        },
        'first': {
          swatch: {
            borderRadius: '2px 0 0 2px'
          }
        },
        'last': {
          swatch: {
            borderRadius: '0 2px 2px 0'
          }
        },
        active: {
          swatch: {
            transform: 'scaleY(1.8)',
            borderRadius: '3.6px/2px'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick({ h: this.props.hsl.h, s: .5, l: this.props.offset });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: this.styles().swatch, ref: 'swatch', onClick: this.handleClick });
    }
  }]);

  return SliderSwatch;
}(_reactcss2.default.Component);

exports.default = SliderSwatch;