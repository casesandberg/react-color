'use strict';
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var ChromePointerCircle = (function (_ReactCSS$Component) {
  _inherits(ChromePointerCircle, _ReactCSS$Component);

  function ChromePointerCircle() {
    _classCallCheck(this, ChromePointerCircle);

    _get(Object.getPrototypeOf(ChromePointerCircle.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ChromePointerCircle, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            boxShadow: 'inset 0 0 0 1px #fff',
            transform: 'translate(-6px, -6px)'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { style: this.styles().picker });
    }
  }]);

  return ChromePointerCircle;
})(ReactCSS.Component);

module.exports = ChromePointerCircle;