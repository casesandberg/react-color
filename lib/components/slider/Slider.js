'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatches = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

var _SliderSwatches = require('./SliderSwatches');

var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

var _SliderPointer = require('./SliderPointer');

var _SliderPointer2 = _interopRequireDefault(_SliderPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swatches = exports.Swatches = function (_ReactCSS$Component) {
  _inherits(Swatches, _ReactCSS$Component);

  function Swatches() {
    _classCallCheck(this, Swatches);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Swatches).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Swatches, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          slider: {},
          hue: {
            height: '12px',
            position: 'relative'
          },
          Hue: {
            radius: '2px'
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      this.props.onChange(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.styles().slider },
        _react2.default.createElement(
          'div',
          { style: this.styles().hue },
          _react2.default.createElement(_common.Hue, _extends({}, this.styles().Hue, this.props, { pointer: _SliderPointer2.default, onChange: this.handleChange }))
        ),
        _react2.default.createElement(
          'div',
          { style: this.styles().swatches },
          _react2.default.createElement(_SliderSwatches2.default, _extends({}, this.props, { onClick: this.handleChange }))
        )
      );
    }
  }]);

  return Swatches;
}(_reactcss2.default.Component);

exports.default = Swatches;