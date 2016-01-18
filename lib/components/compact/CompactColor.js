'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompactColor = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompactColor = exports.CompactColor = function (_ReactCSS$Component) {
  _inherits(CompactColor, _ReactCSS$Component);

  function CompactColor() {
    _classCallCheck(this, CompactColor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CompactColor).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(CompactColor, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          color: {
            background: this.props.color,
            width: '15px',
            height: '15px',
            float: 'left',
            marginRight: '5px',
            marginBottom: '5px',
            position: 'relative',
            cursor: 'pointer'
          },
          dot: {
            Absolute: '5px 5px 5px 5px',
            background: '#fff',
            borderRadius: '50%',
            opacity: '0'
          }
        },
        'active': {
          dot: {
            opacity: '1'
          }
        },
        'color-#FFFFFF': {
          color: {
            boxShadow: 'inset 0 0 0 1px #ddd'
          },
          dot: {
            background: '#000'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick({ hex: this.props.color });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.styles().color, ref: 'color', onClick: this.handleClick },
        _react2.default.createElement('div', { style: this.styles().dot })
      );
    }
  }]);

  return CompactColor;
}(_reactcss2.default.Component);

exports.default = CompactColor;