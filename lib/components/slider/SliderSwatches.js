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

var _SliderSwatch = require('./SliderSwatch');

var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);

var SliderSwatches = (function (_ReactCSS$Component) {
  _inherits(SliderSwatches, _ReactCSS$Component);

  function SliderSwatches() {
    _classCallCheck(this, SliderSwatches);

    _get(Object.getPrototypeOf(SliderSwatches.prototype), 'constructor', this).call(this);

    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(SliderSwatches, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          swatches: {
            marginRight: '-4px',
            marginTop: '20px'
          },
          swatch: {
            width: '19.65%',
            marginRight: '1px',
            float: 'left'
          },
          clear: {
            clear: 'both'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick(data) {
      this.props.onClick(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { style: this.styles().swatches },
        _react2['default'].createElement(
          'div',
          { style: this.styles().swatch },
          _react2['default'].createElement(_SliderSwatch2['default'], _extends({}, this.props, { offset: '.80', active: Math.round(this.props.hsl.l * 100) / 100 == .80 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick, first: true }))
        ),
        _react2['default'].createElement(
          'div',
          { style: this.styles().swatch },
          _react2['default'].createElement(_SliderSwatch2['default'], _extends({}, this.props, { offset: '.65', active: Math.round(this.props.hsl.l * 100) / 100 == .65 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick }))
        ),
        _react2['default'].createElement(
          'div',
          { style: this.styles().swatch },
          _react2['default'].createElement(_SliderSwatch2['default'], _extends({}, this.props, { offset: '.50', active: Math.round(this.props.hsl.l * 100) / 100 == .50 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick }))
        ),
        _react2['default'].createElement(
          'div',
          { style: this.styles().swatch },
          _react2['default'].createElement(_SliderSwatch2['default'], _extends({}, this.props, { offset: '.35', active: Math.round(this.props.hsl.l * 100) / 100 == .35 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick }))
        ),
        _react2['default'].createElement(
          'div',
          { style: this.styles().swatch },
          _react2['default'].createElement(_SliderSwatch2['default'], _extends({}, this.props, { offset: '.20', active: Math.round(this.props.hsl.l * 100) / 100 == .20 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick, last: true }))
        ),
        _react2['default'].createElement('div', { style: this.styles().clear })
      );
    }
  }]);

  return SliderSwatches;
})(_reactcss2['default'].Component);

exports.SliderSwatches = SliderSwatches;
exports['default'] = SliderSwatches;