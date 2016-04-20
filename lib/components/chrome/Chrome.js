'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chrome = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

var _ChromeFields = require('./ChromeFields');

var _ChromeFields2 = _interopRequireDefault(_ChromeFields);

var _ChromePointer = require('./ChromePointer');

var _ChromePointer2 = _interopRequireDefault(_ChromePointer);

var _ChromePointerCircle = require('./ChromePointerCircle');

var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chrome = exports.Chrome = function (_ReactCSS$Component) {
  _inherits(Chrome, _ReactCSS$Component);

  function Chrome() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Chrome);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Chrome)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
      _this.props.onChange(data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Chrome, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            background: '#fff',
            borderRadius: '2px',
            boxShadow: '0px 0px 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
            boxSizing: 'initial',
            width: '225px',
            fontFamily: 'Menlo'
          },
          saturation: {
            width: '100%',
            paddingBottom: '55%',
            position: 'relative',
            borderRadius: '2px 2px 0px 0px',
            overflow: 'hidden'
          },
          Saturation: {
            radius: '2px 2px 0px 0px'
          },
          body: {
            padding: '16px 16px 12px'
          },
          controls: {
            display: 'flex'
          },
          color: {
            width: '32px'
          },
          swatch: {
            marginTop: '6px',
            width: '16px',
            height: '16px',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          },
          active: {
            Absolute: '0px 0px 0px 0px',
            zIndex: 2,
            borderRadius: '8px',
            boxShadow: 'inset 0px 0px 0px 1px rgba(0,0,0,.1)',
            background: 'rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', ' + this.props.rgb.a + ')'
          },
          toggles: {
            flex: '1'
          },
          hue: {
            height: '10px',
            position: 'relative',
            marginBottom: '8px'
          },
          Hue: {
            radius: '2px'
          },
          alpha: {
            height: '10px',
            position: 'relative'
          },
          Alpha: {
            radius: '2px'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.styles().picker },
        _react2.default.createElement(
          'div',
          { style: this.styles().saturation },
          _react2.default.createElement(_common.Saturation, _extends({}, this.styles().Saturation, this.props, { pointer: _ChromePointerCircle2.default, onChange: this.handleChange }))
        ),
        _react2.default.createElement(
          'div',
          { style: this.styles().body },
          _react2.default.createElement(
            'div',
            { style: this.styles().controls, className: 'flexbox-fix' },
            _react2.default.createElement(
              'div',
              { style: this.styles().color },
              _react2.default.createElement(
                'div',
                { style: this.styles().swatch },
                _react2.default.createElement('div', { style: this.styles().active }),
                _react2.default.createElement(_common.Checkboard, null)
              )
            ),
            _react2.default.createElement(
              'div',
              { style: this.styles().toggles },
              _react2.default.createElement(
                'div',
                { style: this.styles().hue },
                _react2.default.createElement(_common.Hue, _extends({}, this.styles().Hue, this.props, { pointer: _ChromePointer2.default, onChange: this.handleChange }))
              ),
              _react2.default.createElement(
                'div',
                { style: this.styles().alpha },
                _react2.default.createElement(_common.Alpha, _extends({}, this.styles().Alpha, this.props, { pointer: _ChromePointer2.default, onChange: this.handleChange }))
              )
            )
          ),
          _react2.default.createElement(_ChromeFields2.default, _extends({}, this.props, { onChange: this.handleChange }))
        )
      );
    }
  }]);

  return Chrome;
}(_reactcss2.default.Component);

exports.default = (0, _common.ColorWrap)(Chrome);