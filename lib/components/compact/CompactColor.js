'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var CompactColor = (function (_ReactCSS$Component) {
  _inherits(CompactColor, _ReactCSS$Component);

  function CompactColor() {
    _classCallCheck(this, CompactColor);

    _get(Object.getPrototypeOf(CompactColor.prototype), 'constructor', this).call(this);

    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(CompactColor, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          color: {
            background: this.props.color,
            width: '15px',
            height: '15px',
            float: 'left',
            marginRight: '5px',
            marginBottom: '5px',
            position: 'relative',
            cursor: 'pointer'
          },
          dot: {
            Absolute: '5px 5px 5px 5px',
            background: '#fff',
            borderRadius: '50%',
            opacity: '0'
          }
        },
        'active': {
          dot: {
            opacity: '1'
          }
        },
        'color-#FFFFFF': {
          color: {
            boxShadow: 'inset 0 0 0 1px #ddd'
          },
          dot: {
            background: '#000'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick({ hex: this.props.color });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().color, onClick: this.handleClick },
        React.createElement('div', { style: this.styles().dot })
      );
    }
  }]);

  return CompactColor;
})(ReactCSS.Component);

module.exports = CompactColor;