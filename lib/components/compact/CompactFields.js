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

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompactColor = exports.CompactColor = function (_ReactCSS$Component) {
  _inherits(CompactColor, _ReactCSS$Component);

  function CompactColor() {
    _classCallCheck(this, CompactColor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CompactColor).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(CompactColor, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          fields: {
            display: 'flex',
            paddingBottom: '6px',
            paddingRight: '5px',
            position: 'relative'
          },
          active: {
            position: 'absolute',
            top: '6px',
            left: '5px',
            height: '9px',
            width: '9px',
            background: '#' + this.props.hex
          },
          Hex: {
            style: {
              wrap: {
                flex: '6',
                position: 'relative'
              },
              input: {
                width: '80%',
                padding: '0',
                paddingLeft: '20%',
                border: 'none',
                outline: 'none',
                background: 'none',
                fontSize: '12px',
                color: '#333',
                height: '16px'
              },
              label: {
                display: 'none'
              }
            }
          },
          RGB: {
            style: {
              wrap: {
                flex: '3',
                position: 'relative'
              },
              input: {
                width: '70%',
                padding: '0',
                paddingLeft: '30%',
                border: 'none',
                outline: 'none',
                background: 'none',
                fontSize: '12px',
                color: '#333',
                height: '16px'
              },
              label: {
                position: 'absolute',
                top: '3px',
                left: '0',
                lineHeight: '16px',
                textTransform: 'uppercase',
                fontSize: '12px',
                color: '#999'
              }
            }
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      if (data.r || data.g || data.b) {
        this.props.onChange({
          r: data.r || this.props.rgb.r,
          g: data.g || this.props.rgb.g,
          b: data.b || this.props.rgb.b
        });
      } else {
        this.props.onChange(data);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { is: 'fields', className: 'flexbox-fix' },
        _react2.default.createElement('div', { is: 'active' }),
        _react2.default.createElement(_common.EditableInput, { is: 'Hex', label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange }),
        _react2.default.createElement(_common.EditableInput, { is: 'RGB', label: 'r', value: this.props.rgb.r, onChange: this.handleChange }),
        _react2.default.createElement(_common.EditableInput, { is: 'RGB', label: 'g', value: this.props.rgb.g, onChange: this.handleChange }),
        _react2.default.createElement(_common.EditableInput, { is: 'RGB', label: 'b', value: this.props.rgb.b, onChange: this.handleChange })
      );
    }
  }]);

  return CompactColor;
}(_reactcss2.default.Component);

exports.default = CompactColor;