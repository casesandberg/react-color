'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var _require = require('../common');

var Saturation = _require.Saturation;
var Hue = _require.Hue;
var Alpha = _require.Alpha;
var Checkboard = _require.Checkboard;

var SketchFields = require('./SketchFields');
var SketchPresetColors = require('./SketchPresetColors');

var Sketch = (function (_ReactCSS$Component) {
  _inherits(Sketch, _ReactCSS$Component);

  function Sketch() {
    _classCallCheck(this, Sketch);

    _get(Object.getPrototypeOf(Sketch.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
  }

  _createClass(Sketch, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            width: '200px',
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
      return React.createElement(
        'div',
        { style: this.styles().picker },
        React.createElement(
          'div',
          { style: this.styles().saturation },
          React.createElement(Saturation, _extends({}, this.styles().Saturation, this.props, { onChange: this.handleChange }))
        ),
        React.createElement(
          'div',
          { style: this.styles().controls, className: 'flexbox-fix' },
          React.createElement(
            'div',
            { style: this.styles().sliders },
            React.createElement(
              'div',
              { style: this.styles().hue },
              React.createElement(Hue, _extends({}, this.styles().Hue, this.props, { onChange: this.handleChange }))
            ),
            React.createElement(
              'div',
              { style: this.styles().alpha },
              React.createElement(Alpha, _extends({}, this.styles().Alpha, this.props, { onChange: this.handleChange }))
            )
          ),
          React.createElement(
            'div',
            { style: this.styles().color },
            React.createElement('div', { style: this.styles().activeColor }),
            React.createElement(Checkboard, null)
          )
        ),
        React.createElement(
          'div',
          { style: this.styles().fields },
          React.createElement(SketchFields, _extends({}, this.props, { onChange: this.handleChange }))
        ),
        React.createElement(
          'div',
          { style: this.styles().presets },
          React.createElement(SketchPresetColors, { colors: this.props.presetColors, onClick: this.handleChange })
        )
      );
    }
  }]);

  return Sketch;
})(ReactCSS.Component);

Sketch.defaultProps = {
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
};

module.exports = Sketch;