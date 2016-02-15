'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Material = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _reactMaterialDesign = require('../../../modules/react-material-design');

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Material = exports.Material = function (_ReactCSS$Component) {
  _inherits(Material, _ReactCSS$Component);

  function Material() {
    _classCallCheck(this, Material);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Material).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Material, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          material: {
            width: '98px',
            height: '98px',
            padding: '16px',
            fontFamily: 'Roboto'
          },
          Hex: {
            style: {
              wrap: {
                position: 'relative'
              },
              input: {
                width: '100%',
                marginTop: '12px',
                fontSize: '15px',
                color: '#333',
                padding: '0',
                border: '0',
                borderBottom: '2px solid #' + this.props.hex,
                outline: 'none',
                height: '30px'
              },
              label: {
                position: 'absolute',
                top: '0',
                left: '0',
                fontSize: '11px',
                color: '#999999',
                textTransform: 'capitalize'
              }
            }
          },
          Input: {
            style: {
              wrap: {
                position: 'relative'
              },
              input: {
                width: '100%',
                marginTop: '12px',
                fontSize: '15px',
                color: '#333',
                padding: '0',
                border: '0',
                borderBottom: '1px solid #eee',
                outline: 'none',
                height: '30px'
              },
              label: {
                position: 'absolute',
                top: '0',
                left: '0',
                fontSize: '11px',
                color: '#999999',
                textTransform: 'capitalize'
              }
            }
          },
          split: {
            display: 'flex',
            marginRight: '-10px',
            paddingTop: '11px'
          },
          third: {
            flex: '1',
            paddingRight: '10px'
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      if (data.hex) {
        _color2.default.isValidHex(data.hex) && this.props.onChange(data.hex);
      } else if (data.r || data.g || data.b) {
        this.props.onChange({
          r: data.r || this.props.rgb.r,
          g: data.g || this.props.rgb.g,
          b: data.b || this.props.rgb.b
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactMaterialDesign.Raised,
        null,
        _react2.default.createElement(
          'div',
          { is: 'material' },
          _react2.default.createElement(_common.EditableInput, { is: 'Hex', label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange }),
          _react2.default.createElement(
            'div',
            { is: 'split', className: 'flexbox-fix' },
            _react2.default.createElement(
              'div',
              { is: 'third' },
              _react2.default.createElement(_common.EditableInput, { is: 'Input', label: 'r', value: this.props.rgb.r, onChange: this.handleChange })
            ),
            _react2.default.createElement(
              'div',
              { is: 'third' },
              _react2.default.createElement(_common.EditableInput, { is: 'Input', label: 'g', value: this.props.rgb.g, onChange: this.handleChange })
            ),
            _react2.default.createElement(
              'div',
              { is: 'third' },
              _react2.default.createElement(_common.EditableInput, { is: 'Input', label: 'b', value: this.props.rgb.b, onChange: this.handleChange })
            )
          )
        )
      );
    }
  }]);

  return Material;
}(_reactcss2.default.Component);

exports.default = (0, _common.ColorWrap)(Material);