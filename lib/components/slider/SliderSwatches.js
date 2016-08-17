'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderSwatches = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _SliderSwatch = require('./SliderSwatch');

var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderSwatches = exports.SliderSwatches = function (_React$Component) {
  _inherits(SliderSwatches, _React$Component);

  function SliderSwatches() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, SliderSwatches);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SliderSwatches)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleClick = function (data) {
      _this.props.onClick(data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SliderSwatches, [{
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          swatches: {
            marginTop: '20px'
          },
          swatch: {
            boxSizing: 'border-box',
            width: '20%',
            paddingRight: '1px',
            float: 'left'
          },
          clear: {
            clear: 'both'
          }
        }
      });

      return _react2.default.createElement(
        'div',
        { style: styles.swatches },
        _react2.default.createElement(
          'div',
          { style: styles.swatch },
          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, { offset: '.80', active: Math.round(this.props.hsl.l * 100) / 100 == .80 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick, first: true }))
        ),
        _react2.default.createElement(
          'div',
          { style: styles.swatch },
          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, { offset: '.65', active: Math.round(this.props.hsl.l * 100) / 100 == .65 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick }))
        ),
        _react2.default.createElement(
          'div',
          { style: styles.swatch },
          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, { offset: '.50', active: Math.round(this.props.hsl.l * 100) / 100 == .50 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick }))
        ),
        _react2.default.createElement(
          'div',
          { style: styles.swatch },
          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, { offset: '.35', active: Math.round(this.props.hsl.l * 100) / 100 == .35 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick }))
        ),
        _react2.default.createElement(
          'div',
          { style: styles.swatch },
          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, { offset: '.20', active: Math.round(this.props.hsl.l * 100) / 100 == .20 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick, last: true }))
        ),
        _react2.default.createElement('div', { style: styles.clear })
      );
    }
  }]);

  return SliderSwatches;
}(_react2.default.Component);

exports.default = SliderSwatches;