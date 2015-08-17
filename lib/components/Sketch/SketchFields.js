'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('../../../modules/tinycolor2');

var _require = require('../common');

var EditableInput = _require.EditableInput;

var ShetchFields = (function (_ReactCSS$Component) {
  _inherits(ShetchFields, _ReactCSS$Component);

  function ShetchFields() {
    _classCallCheck(this, ShetchFields);

    _get(Object.getPrototypeOf(ShetchFields.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
  }

  _createClass(ShetchFields, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          fields: {
            display: 'flex',
            paddingTop: '4px'
          },
          single: {
            flex: '1',
            paddingLeft: '6px'
          },
          double: {
            flex: '2'
          },
          Input: {
            style: {
              input: {
                width: '80%',
                padding: '4px 10% 3px',
                border: 'none',
                boxShadow: 'inset 0 0 0 1px #ccc',
                fontSize: '11px'
              },
              label: {
                display: 'block',
                textAlign: 'center',
                fontSize: '11px',
                color: '#222',
                paddingTop: '3px',
                paddingBottom: '4px',
                textTransform: 'capitalize'
              }
            }
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      if (data.hex) {
        tinycolor(data.hex).isValid() && this.props.onChange(data.hex);
      } else if (data.r || data.g || data.b) {
        this.props.onChange({
          r: data.r || this.props.rgb.r,
          g: data.g || this.props.rgb.g,
          b: data.b || this.props.rgb.b,
          a: this.props.rgb.a
        });
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 100) {
          data.a = 100;
        }

        data.a = data.a / 100;
        this.props.onChange({
          h: this.props.hsl.h,
          s: this.props.hsl.s,
          l: this.props.hsl.l,
          a: data.a
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { is: 'fields', className: 'flexbox-fix' },
        React.createElement(
          'div',
          { is: 'double' },
          React.createElement(EditableInput, { is: 'Input', label: 'hex', value: this.props.hex.replace('#', ''), onChange: this.handleChange })
        ),
        React.createElement(
          'div',
          { is: 'single' },
          React.createElement(EditableInput, { is: 'Input', label: 'r', value: this.props.rgb.r, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' })
        ),
        React.createElement(
          'div',
          { is: 'single' },
          React.createElement(EditableInput, { is: 'Input', label: 'g', value: this.props.rgb.g, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' })
        ),
        React.createElement(
          'div',
          { is: 'single' },
          React.createElement(EditableInput, { is: 'Input', label: 'b', value: this.props.rgb.b, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' })
        ),
        React.createElement(
          'div',
          { is: 'single' },
          React.createElement(EditableInput, { is: 'Input', label: 'a', value: Math.round(this.props.rgb.a * 100), onChange: this.handleChange, dragLabel: 'true', dragMax: '100' })
        )
      );
    }
  }]);

  return ShetchFields;
})(ReactCSS.Component);

module.exports = ShetchFields;