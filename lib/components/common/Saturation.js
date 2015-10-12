'use strict';
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var _ = require('lodash');

var Saturation = (function (_ReactCSS$Component) {
  _inherits(Saturation, _ReactCSS$Component);

  function Saturation(props) {
    _classCallCheck(this, Saturation);

    _get(Object.getPrototypeOf(Saturation.prototype), 'constructor', this).call(this);

    this.throttle = _.throttle(function (fn, data) {
      fn(data);
    }, 50);

    this.handleChange = this.handleChange.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  _createClass(Saturation, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          color: {
            Absolute: '0 0 0 0',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            Absolute: '0 0 0 0',
            background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))'
          },
          black: {
            Absolute: '0 0 0 0',
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
            boxShadow: this.props.shadow
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
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

      if (left < 0) {
        left = 0;
      } else if (left > containerWidth) {
        left = containerWidth;
      } else if (top < 0) {
        top = 0;
      } else if (top > containerHeight) {
        top = containerHeight;
      }

      var saturation = left * 100 / containerWidth;
      var bright = -(top * 100 / containerHeight) + 100;

      this.throttle(this.props.onChange, { h: this.props.hsl.h, s: saturation, v: bright, a: this.props.hsl.a });
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
      var pointer = React.createElement('div', { style: this.styles().circle });

      if (this.props.pointer) {
        pointer = React.createElement(this.props.pointer, this.props);
      }

      return React.createElement(
        'div',
        { style: this.styles().color, ref: 'container', onMouseDown: this.handleMouseDown, onTouchMove: this.handleChange },
        React.createElement(
          'div',
          { style: this.styles().white },
          React.createElement('div', { style: this.styles().black }),
          React.createElement(
            'div',
            { style: this.styles().pointer, ref: 'pointer' },
            pointer
          )
        )
      );
    }
  }]);

  return Saturation;
})(ReactCSS.Component);

module.exports = Saturation;