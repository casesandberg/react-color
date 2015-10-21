'use strict';
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var SliderSwatch = (function (_ReactCSS$Component) {
  _inherits(SliderSwatch, _ReactCSS$Component);

  function SliderSwatch() {
    _classCallCheck(this, SliderSwatch);

    _get(Object.getPrototypeOf(SliderSwatch.prototype), 'constructor', this).call(this);

    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(SliderSwatch, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          swatch: {
            height: '12px',
            background: 'hsl(' + this.props.hsl.h + ', 50%, ' + this.props.offset * 100 + '%)',
            cursor: 'pointer'
          }
        },
        'first': {
          swatch: {
            borderRadius: '2px 0 0 2px'
          }
        },
        'last': {
          swatch: {
            borderRadius: '0 2px 2px 0'
          }
        },
        active: {
          swatch: {
            transform: 'scaleY(1.8)',
            borderRadius: '3.6px/2px'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick({ h: this.props.hsl.h, s: .5, l: this.props.offset });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { style: this.styles().swatch, ref: 'swatch', onClick: this.handleClick });
    }
  }]);

  return SliderSwatch;
})(ReactCSS.Component);

module.exports = SliderSwatch;