'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var Checkboard = require('./Checkboard');

var Alpha = (function (_ReactCSS$Component) {
  _inherits(Alpha, _ReactCSS$Component);

  function Alpha() {
    _classCallCheck(this, Alpha);

    _get(Object.getPrototypeOf(Alpha.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  _createClass(Alpha, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          alpha: {
            Absolute: '0 0 0 0',
            borderRadius: this.props.radius
          },
          checkboard: {
            Absolute: '0 0 0 0',
            overflow: 'hidden'
          },
          gradient: {
            Absolute: '0 0 0 0',
            background: 'linear-gradient(to right, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 0) 0%, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            zIndex: '2',
            height: '100%',
            margin: '0 3px'
          },
          pointer: {
            zIndex: '2',
            position: 'absolute',
            left: this.props.rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e, skip) {
      !skip && e.preventDefault();
      var container = React.findDOMNode(this.refs.container);
      var containerWidth = container.clientWidth;
      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);

      var a;
      if (left < 0) {
        a = 0;
      } else if (left > containerWidth) {
        a = 1;
      } else {
        a = Math.round(left * 100 / containerWidth) / 100;
      }

      if (this.props.a !== a) {
        this.props.onChange({ h: this.props.hsl.h, s: this.props.hsl.s, l: this.props.hsl.l, a: a });
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
      var pointer = React.createElement('div', { style: this.styles().slider });

      if (this.props.pointer) {
        pointer = React.createElement(this.props.pointer, this.props);
      }

      return React.createElement(
        'div',
        { style: this.styles().alpha },
        React.createElement(
          'div',
          { style: this.styles().checkboard },
          React.createElement(Checkboard, null)
        ),
        React.createElement('div', { style: this.styles().gradient }),
        React.createElement(
          'div',
          { style: this.styles().container, ref: 'container', onMouseDown: this.handleMouseDown, onTouchMove: this.handleChange },
          React.createElement(
            'div',
            { style: this.styles().pointer, ref: 'pointer' },
            pointer
          )
        )
      );
    }
  }]);

  return Alpha;
})(ReactCSS.Component);

module.exports = Alpha;