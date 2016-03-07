'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorWrap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _lodash = require('lodash.isplainobject');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.debounce');

var _lodash4 = _interopRequireDefault(_lodash3);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {
  var ColorPicker = function (_React$Component) {
    _inherits(ColorPicker, _React$Component);

    function ColorPicker(props) {
      _classCallCheck(this, ColorPicker);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPicker).call(this));

      _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]);

      _this.handleChange = function (data) {
        data = _color2.default.simpleCheckForValidColor(data);
        if (data) {
          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors);
          _this.props.onChange && _this.props.onChange(colors);
        }
      };

      _this.state = (0, _merge2.default)(_color2.default.toState(props.color, 0), {
        visible: props.display
      });

      _this.debounce = (0, _lodash4.default)(function (fn, data) {
        fn(data);
      }, 100);
      return _this;
    }

    _createClass(ColorPicker, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState((0, _merge2.default)(_color2.default.toState(nextProps.color, this.state.oldHue), {
          visible: nextProps.display
        }));
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, { onChange: this.handleChange }));
      }
    }]);

    return ColorPicker;
  }(_react2.default.Component);

  ColorPicker.defaultProps = {
    color: {
      h: 250,
      s: .50,
      l: .20,
      a: 1
    }
  };

  return ColorPicker;
};

exports.default = ColorWrap;