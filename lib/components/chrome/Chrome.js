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

var ChromeFields = require('./ChromeFields.jsx');
var ChromePointer = require('./ChromePointer.jsx');
var ChromePointerCircle = require('./ChromePointerCircle.jsx');

var Chrome = (function (_ReactCSS$Component) {
  _inherits(Chrome, _ReactCSS$Component);

  function Chrome() {
    _classCallCheck(this, Chrome);

    _get(Object.getPrototypeOf(Chrome.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
  }

  _createClass(Chrome, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            background: '#fff',
            borderRadius: '2px',
            boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
            width: '225px',
            fontFamily: 'Menlo'
          },
          saturation: {
            width: '100%',
            paddingBottom: '55%',
            position: 'relative',
            borderRadius: '2px 2px 0 0',
            overflow: 'hidden'
          },
          Saturation: {
            radius: '2px 2px 0 0'
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
            Absolute: '0 0 0 0',
            zIndex: 2,
            borderRadius: '8px',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
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
    key: 'handleChange',
    value: function handleChange(data) {
      this.props.onChange(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { is: 'picker' },
        React.createElement(
          'div',
          { is: 'saturation' },
          React.createElement(Saturation, _extends({ is: 'Saturation' }, this.props, { pointer: ChromePointerCircle, onChange: this.handleChange }))
        ),
        React.createElement(
          'div',
          { is: 'body' },
          React.createElement(
            'div',
            { is: 'controls', className: 'flexbox-fix' },
            React.createElement(
              'div',
              { is: 'color' },
              React.createElement(
                'div',
                { is: 'swatch' },
                React.createElement('div', { is: 'active' }),
                React.createElement(Checkboard, null)
              )
            ),
            React.createElement(
              'div',
              { is: 'toggles' },
              React.createElement(
                'div',
                { is: 'hue' },
                React.createElement(Hue, _extends({ is: 'Hue' }, this.props, { pointer: ChromePointer, onChange: this.handleChange }))
              ),
              React.createElement(
                'div',
                { is: 'alpha' },
                React.createElement(Alpha, _extends({ is: 'Alpha' }, this.props, { pointer: ChromePointer, onChange: this.handleChange }))
              )
            )
          ),
          React.createElement(ChromeFields, _extends({}, this.props, { onChange: this.handleChange }))
        )
      );
    }
  }]);

  return Chrome;
})(ReactCSS.Component);

module.exports = Chrome;