'use strict';Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _helpersColor = require('../../helpers/color');

var _helpersColor2 = _interopRequireDefault(_helpersColor);

var _common = require('../common');

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
        _helpersColor2['default'].isValidHex(data.hex) && this.props.onChange(data.hex);
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
      return _react2['default'].createElement(
        'div',
        { style: this.styles().fields, className: 'flexbox-fix' },
        _react2['default'].createElement(
          'div',
          { style: this.styles().double },
          _react2['default'].createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'hex', value: this.props.hex.replace('#', ''), onChange: this.handleChange }))
        ),
        _react2['default'].createElement(
          'div',
          { style: this.styles().single },
          _react2['default'].createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' }))
        ),
        _react2['default'].createElement(
          'div',
          { style: this.styles().single },
          _react2['default'].createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' }))
        ),
        _react2['default'].createElement(
          'div',
          { style: this.styles().single },
          _react2['default'].createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' }))
        ),
        _react2['default'].createElement(
          'div',
          { style: this.styles().single },
          _react2['default'].createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'a', value: Math.round(this.props.rgb.a * 100), onChange: this.handleChange, dragLabel: 'true', dragMax: '100' }))
        )
      );
    }
  }]);

  return ShetchFields;
})(_reactcss2['default'].Component);

exports.ShetchFields = ShetchFields;
exports['default'] = ShetchFields;