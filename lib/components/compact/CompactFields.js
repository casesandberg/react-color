'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var _require = require('../common');

var EditableInput = _require.EditableInput;

var CompactColor = (function (_ReactCSS$Component) {
  _inherits(CompactColor, _ReactCSS$Component);

  function CompactColor() {
    _classCallCheck(this, CompactColor);

    _get(Object.getPrototypeOf(CompactColor.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
  }

  _createClass(CompactColor, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          fields: {
            display: 'flex',
            paddingBottom: '6px',
            paddingRight: '5px',
            position: 'relative'
          },
          active: {
            position: 'absolute',
            top: '6px',
            left: '5px',
            height: '9px',
            width: '9px',
            background: '#' + this.props.hex
          },
          Hex: {
            style: {
              wrap: {
                flex: '6',
                position: 'relative'
              },
              input: {
                width: '80%',
                padding: '0',
                paddingLeft: '20%',
                border: 'none',
                outline: 'none',
                background: 'none',
                fontSize: '12px',
                color: '#333',
                height: '16px'
              },
              label: {
                display: 'none'
              }
            }
          },
          RGB: {
            style: {
              wrap: {
                flex: '3',
                position: 'relative'
              },
              input: {
                width: '70%',
                padding: '0',
                paddingLeft: '30%',
                border: 'none',
                outline: 'none',
                background: 'none',
                fontSize: '12px',
                color: '#333',
                height: '16px'
              },
              label: {
                position: 'absolute',
                top: '3px',
                left: '0',
                lineHeight: '16px',
                textTransform: 'uppercase',
                fontSize: '12px',
                color: '#999'
              }
            }
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      if (data.r || data.g || data.b) {
        this.props.onChange({
          r: data.r || this.props.rgb.r,
          g: data.g || this.props.rgb.g,
          b: data.b || this.props.rgb.b
        });
      } else {
        this.props.onChange(data);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().fields, className: 'flexbox-fix' },
        React.createElement('div', { style: this.styles().active }),
        React.createElement(EditableInput, _extends({}, this.styles().Hex, { label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange })),
        React.createElement(EditableInput, _extends({}, this.styles().RGB, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange })),
        React.createElement(EditableInput, _extends({}, this.styles().RGB, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange })),
        React.createElement(EditableInput, _extends({}, this.styles().RGB, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange }))
      );
    }
  }]);

  return CompactColor;
})(ReactCSS.Component);

module.exports = CompactColor;