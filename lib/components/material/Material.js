'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('../../../modules/tinycolor2');

var _require = require('../../../modules/react-material-design');

var Raised = _require.Raised;

var _require2 = require('../common');

var EditableInput = _require2.EditableInput;

var Material = (function (_ReactCSS$Component) {
  _inherits(Material, _ReactCSS$Component);

  function Material() {
    _classCallCheck(this, Material);

    _get(Object.getPrototypeOf(Material.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
  }

  _createClass(Material, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          material: {
            width: '98px',
            height: '98px',
            padding: '16px',
            fontFamily: 'Roboto'
          },
          Hex: {
            style: {
              wrap: {
                position: 'relative'
              },
              input: {
                width: '100%',
                marginTop: '12px',
                fontSize: '15px',
                color: '#333',
                padding: '0',
                border: '0',
                borderBottom: '2px solid #' + this.props.hex,
                outline: 'none',
                height: '30px'
              },
              label: {
                position: 'absolute',
                top: '0',
                left: '0',
                fontSize: '11px',
                color: '#999999',
                textTransform: 'capitalize'
              }
            }
          },
          Input: {
            style: {
              wrap: {
                position: 'relative'
              },
              input: {
                width: '100%',
                marginTop: '12px',
                fontSize: '15px',
                color: '#333',
                padding: '0',
                border: '0',
                borderBottom: '1px solid #eee',
                outline: 'none',
                height: '30px'
              },
              label: {
                position: 'absolute',
                top: '0',
                left: '0',
                fontSize: '11px',
                color: '#999999',
                textTransform: 'capitalize'
              }
            }
          },
          split: {
            display: 'flex',
            marginRight: '-10px',
            paddingTop: '11px'
          },
          third: {
            flex: '1',
            paddingRight: '10px'
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
          b: data.b || this.props.rgb.b
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        Raised,
        null,
        React.createElement(
          'div',
          { style: this.styles().material },
          React.createElement(EditableInput, _extends({}, this.styles().Hex, { label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange })),
          React.createElement(
            'div',
            { style: this.styles().split, className: 'flexbox-fix' },
            React.createElement(
              'div',
              { style: this.styles().third },
              React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange }))
            ),
            React.createElement(
              'div',
              { style: this.styles().third },
              React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange }))
            ),
            React.createElement(
              'div',
              { style: this.styles().third },
              React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange }))
            )
          )
        )
      );
    }
  }]);

  return Material;
})(ReactCSS.Component);

module.exports = Material;