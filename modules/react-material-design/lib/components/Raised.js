/* jshint node: true, esnext: true */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var Raised = (function (_ReactCSS$Component) {
  _inherits(Raised, _ReactCSS$Component);

  function Raised() {
    _classCallCheck(this, Raised);

    _get(Object.getPrototypeOf(Raised.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Raised, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          wrap: {
            position: 'relative'
          },
          content: {
            position: 'relative'
          },
          bg: {
            Absolute: '0 0 0 0',
            boxShadow: '0 ${ this.props.zDepth }px ${ this.props.zDepth * 4 }px rgba(0,0,0,.24)',
            borderRadius: this.props.radius,
            background: this.props.background
          }
        },
        'zDepth-0': {
          bg: {
            boxShadow: 'none'
          }
        },

        'zDepth-1': {
          bg: {
            boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
          }
        },
        'zDepth-2': {
          bg: {
            boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
          }
        },
        'zDepth-3': {
          bg: {
            boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
          }
        },
        'zDepth-4': {
          bg: {
            boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
          }
        },
        'zDepth-5': {
          bg: {
            boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
          }
        },
        'square': {
          bg: {
            borderRadius: '0'
          }
        },
        'circle': {
          bg: {
            borderRadius: '50%'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().wrap },
        React.createElement('div', { style: this.styles().bg }),
        React.createElement(
          'div',
          { style: this.styles().content },
          this.props.children
        )
      );
    }
  }]);

  return Raised;
})(ReactCSS.Component);

Raised.propTypes = {
  background: React.PropTypes.string,
  zDepth: React.PropTypes.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
  radius: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: '1',
  radius: '2px'
};

module.exports = Raised;