'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twitter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Twitter = exports.Twitter = function (_React$Component) {
  _inherits(Twitter, _React$Component);

  function Twitter() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Twitter);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Twitter.__proto__ || Object.getPrototypeOf(Twitter)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (hex) {
      _color2.default.isValidHex(hex) && _this.props.onChange({
        hex: hex,
        source: 'hex'
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Twitter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          card: {
            width: this.props.width,
            background: '#fff',
            border: '0 solid rgba(0,0,0,0.25)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
            borderRadius: '4px',
            position: 'relative'
          },
          body: {
            padding: '15px 9px 9px 15px'
          },
          label: {
            fontSize: '18px',
            color: '#fff'
          },
          triangle: {
            width: '0px',
            height: '0px',
            borderStyle: 'solid',
            borderWidth: '0 9px 10px 9px',
            borderColor: 'transparent transparent #fff transparent',
            position: 'absolute',
            top: '-10px',
            left: '12px'
          },
          triangleShadow: {
            width: '0px',
            height: '0px',
            borderStyle: 'solid',
            borderWidth: '0 9px 10px 9px',
            borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
            position: 'absolute',
            top: '-11px',
            left: '12px'
          },
          hash: {
            background: '#F0F0F0',
            height: '30px',
            width: '30px',
            borderRadius: '4px 0 0 4px',
            float: 'left',
            color: '#98A1A4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          input: {
            width: '100px',
            fontSize: '14px',
            color: '#666',
            border: '0px',
            outline: 'none',
            height: '28px',
            boxShadow: 'inset 0 0 0 1px #F0F0F0',
            borderRadius: '0 4px 4px 0',
            float: 'left',
            paddingLeft: '8px'
          },
          swatch: {
            width: '30px',
            height: '30px',
            float: 'left',
            borderRadius: '4px',
            margin: '0 6px 6px 0'
          },
          clear: {
            clear: 'both'
          }
        }
      });

      return _react2.default.createElement(
        'div',
        { style: styles.card },
        _react2.default.createElement('div', { style: styles.triangleShadow }),
        _react2.default.createElement('div', { style: styles.triangle }),
        _react2.default.createElement(
          'div',
          { style: styles.body },
          (0, _map2.default)(this.props.colors, function (c) {
            return _react2.default.createElement(_common.Swatch, { color: c, hex: c, style: styles.swatch, onClick: _this2.handleChange });
          }),
          _react2.default.createElement(
            'div',
            { style: styles.hash },
            '#'
          ),
          _react2.default.createElement(_common.EditableInput, {
            placeholder: 'ff691f',
            style: { input: styles.input },
            value: '',
            onChange: this.handleChange
          }),
          _react2.default.createElement('div', { style: styles.clear })
        )
      );
    }
  }]);

  return Twitter;
}(_react2.default.Component);

Twitter.defaultProps = {
  width: '276px',
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']
};

exports.default = (0, _common.ColorWrap)(Twitter);