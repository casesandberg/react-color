'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

var _BlockSwatches = require('./BlockSwatches');

var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block = exports.Block = function (_React$Component) {
  _inherits(Block, _React$Component);

  function Block() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Block);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Block.__proto__ || Object.getPrototypeOf(Block)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (hex) {
      _color2.default.isValidHex(hex) && _this.props.onChange({
        hex: hex,
        source: 'hex'
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Block, [{
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          card: {
            width: this.props.width,
            background: '#fff',
            boxShadow: '0 1px rgba(0,0,0,.1)',
            borderRadius: '6px',
            position: 'relative'
          },
          head: {
            height: '110px',
            background: this.props.hex,
            borderRadius: '6px 6px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          body: {
            padding: '10px'
          },
          label: {
            fontSize: '18px',
            color: '#fff'
          },
          triangle: {
            width: '0px',
            height: '0px',
            borderStyle: 'solid',
            borderWidth: '0 10px 10px 10px',
            borderColor: 'transparent transparent ' + this.props.hex + ' transparent',
            position: 'absolute',
            top: '-10px',
            left: '50%',
            marginLeft: '-10px'
          },
          input: {
            width: '100%',
            fontSize: '12px',
            color: '#666',
            border: '0px',
            outline: 'none',
            height: '22px',
            boxShadow: 'inset 0 0 0 1px #ddd',
            borderRadius: '4px',
            padding: '0 7px',
            boxSizing: 'border-box'
          }
        }
      });

      return _react2.default.createElement(
        'div',
        { style: styles.card, className: 'block-picker' },
        _react2.default.createElement('div', { style: styles.triangle }),
        _react2.default.createElement(
          'div',
          { style: styles.head },
          _react2.default.createElement(
            'div',
            { style: styles.label },
            this.props.hex
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.body },
          _react2.default.createElement(_BlockSwatches2.default, { colors: this.props.colors, onClick: this.handleChange }),
          _react2.default.createElement(_common.EditableInput, {
            placeholder: 'Hex Code',
            style: { input: styles.input },
            value: '',
            onChange: this.handleChange
          })
        )
      );
    }
  }]);

  return Block;
}(_react2.default.Component);

Block.defaultProps = {
  width: '170px',
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']
};

exports.default = (0, _common.ColorWrap)(Block);