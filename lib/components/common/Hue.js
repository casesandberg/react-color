'use strict';Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var Hue = (function (_ReactCSS$Component) {
  _inherits(Hue, _ReactCSS$Component);

  function Hue() {
    _classCallCheck(this, Hue);

    _get(Object.getPrototypeOf(Hue.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  _createClass(Hue, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          hue: {
            Absolute: '0 0 0 0',
            background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            margin: '0 2px',
            position: 'relative',
            height: '100%'
          },
          pointer: {
            zIndex: '2',
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'direction-vertical': {
          hue: {
            background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
          },
          pointer: {
            left: '0',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e, skip) {
      !skip && e.preventDefault();
      var container = this.refs.container;
      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;
      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);
      var top = (e.pageY || e.touches[0].pageY) - (container.getBoundingClientRect().top + window.pageYOffset);

      if (this.props.direction === 'vertical') {
        var h;
        if (top < 0) {
          h = 359;
        } else if (top > containerHeight) {
          h = 0;
        } else {
          var percent = -(top * 100 / containerHeight) + 100;
          h = 360 * percent / 100;
        }

        if (this.props.hsl.h !== h) {
          this.props.onChange({ h: h, s: this.props.hsl.s, l: this.props.hsl.l, a: this.props.hsl.a });
        }
      } else {
        var h;
        if (left < 0) {
          h = 0;
        } else if (left > containerWidth) {
          h = 359;
        } else {
          var percent = left * 100 / containerWidth;
          h = 360 * percent / 100;
        }

        if (this.props.hsl.h !== h) {
          this.props.onChange({ h: h, s: this.props.hsl.s, l: this.props.hsl.l, a: this.props.hsl.a });
        }
      }
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var pointer = _react2['default'].createElement('div', { style: this.styles().slider });

      if (this.props.pointer) {
        pointer = _react2['default'].createElement(this.props.pointer, this.props);
      }

      return _react2['default'].createElement(
        'div',
        { style: this.styles().hue },
        _react2['default'].createElement(
          'div',
          { style: this.styles().container, ref: 'container', onMouseDown: this.handleMouseDown, onTouchMove: this.handleChange },
          _react2['default'].createElement(
            'div',
            { style: this.styles().pointer, ref: 'pointer' },
            pointer
          )
        )
      );
    }
  }]);

  return Hue;
})(_reactcss2['default'].Component);

exports.Hue = Hue;
exports['default'] = Hue;