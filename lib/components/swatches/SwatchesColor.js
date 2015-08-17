'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var SwatchesColor = (function (_ReactCSS$Component) {
  _inherits(SwatchesColor, _ReactCSS$Component);

  function SwatchesColor() {
    _classCallCheck(this, SwatchesColor);

    _get(Object.getPrototypeOf(SwatchesColor.prototype), 'constructor', this).call(this);

    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(SwatchesColor, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          color: {
            width: '40px',
            height: '24px',
            cursor: 'pointer',
            background: this.props.color,
            marginBottom: '1px'
          },
          check: {
            fill: '#fff',
            marginLeft: '8px',
            display: 'none'
          }
        },
        'first': {
          color: {
            overflow: 'hidden',
            borderRadius: '2px 2px 0 0'
          }
        },
        'last': {
          color: {
            overflow: 'hidden',
            borderRadius: '0 0 2px 2px'
          }
        },
        active: {
          check: {
            display: 'block'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick(this.props.color);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().color, onClick: this.handleClick },
        React.createElement(
          'div',
          { style: this.styles().check },
          React.createElement(
            'svg',
            { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24' },
            React.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
          )
        )
      );
    }
  }]);

  return SwatchesColor;
})(ReactCSS.Component);

module.exports = SwatchesColor;