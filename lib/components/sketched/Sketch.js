'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sketch = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

var _SketchFields = require('./SketchFields');

var _SketchFields2 = _interopRequireDefault(_SketchFields);

var _SketchPresetColors = require('./SketchPresetColors');

var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sketch = exports.Sketch = function (_ReactCSS$Component) {
  _inherits(Sketch, _ReactCSS$Component);

  function Sketch() {
    _classCallCheck(this, Sketch);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sketch).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Sketch, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            width: this.props.width,
            padding: '10px 10px 0',
            boxSizing: 'initial',
            background: '#fff',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
          },
          saturation: {
            width: '100%',
            paddingBottom: '75%',
            position: 'relative',
            overflow: 'hidden'
          },
          Saturation: {
            radius: '3px',
            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
          },
          controls: {
            display: 'flex'
          },
          sliders: {
            padding: '4px 0',
            flex: '1'
          },
          color: {
            width: '24px',
            height: '24px',
            position: 'relative',
            marginTop: '4px',
            marginLeft: '4px',
            borderRadius: '3px'
          },
          activeColor: {
            Absolute: '0 0 0 0',
            borderRadius: '2px',
            background: 'rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', ' + this.props.rgb.a + ')',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
            zIndex: '2'
          },
          hue: {
            position: 'relative',
            height: '10px',
            overflow: 'hidden'
          },
          Hue: {
            radius: '2px',
            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
          },

          alpha: {
            position: 'relative',
            height: '10px',
            marginTop: '4px',
            overflow: 'hidden'
          },
          Alpha: {
            radius: '2px',
            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
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
        { is: 'picker' },
        _react2.default.createElement(
          'div',
          { is: 'saturation' },
          _react2.default.createElement(_common.Saturation, _extends({ is: 'Saturation' }, this.props, { onChange: this.handleChange }))
        ),
        _react2.default.createElement(
          'div',
          { is: 'controls', className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { is: 'sliders' },
            _react2.default.createElement(
              'div',
              { is: 'hue' },
              _react2.default.createElement(_common.Hue, _extends({ is: 'Hue' }, this.props, { onChange: this.handleChange }))
            ),
            _react2.default.createElement(
              'div',
              { is: 'alpha' },
              _react2.default.createElement(_common.Alpha, _extends({ is: 'Alpha' }, this.props, { onChange: this.handleChange }))
            )
          ),
          _react2.default.createElement(
            'div',
            { is: 'color' },
            _react2.default.createElement('div', { is: 'activeColor' }),
            _react2.default.createElement(_common.Checkboard, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { is: 'fields' },
          _react2.default.createElement(_SketchFields2.default, _extends({}, this.props, { onChange: this.handleChange }))
        ),
        _react2.default.createElement(
          'div',
          { is: 'presets' },
          _react2.default.createElement(_SketchPresetColors2.default, { colors: this.props.presetColors, onClick: this.handleChange })
        )
      );
    }
  }]);

  return Sketch;
}(_reactcss2.default.Component);

Sketch.defaultProps = {
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
  width: 200
};

exports.default = (0, _common.ColorWrap)(Sketch);