/* jshint node: true, esnext: true */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var _require = require('../../../react-material-design');

var Tile = _require.Tile;

module.exports = (function (_ReactCSS$Component) {
  _inherits(SidebarItem, _ReactCSS$Component);

  function SidebarItem() {
    _classCallCheck(this, SidebarItem);

    _get(Object.getPrototypeOf(SidebarItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SidebarItem, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          sidebarItem: {
            fontSize: '14px',
            textDecoration: 'none',
            color: 'rgba(0, 0, 0, .57)',
            transition: 'all 200ms linear'
          },
          number: {
            fontSize: '14px',
            color: 'rgba(0, 0, 0, .27)',
            fontWeight: 'bold',
            paddingTop: '14px'
          },
          li: {
            paddingBottom: '8px'
          }
        },
        'bold': {
          sidebarItem: {
            fontWeight: 'bold',
            paddingTop: '14px',
            display: 'block'
          }
        },
        'active': {
          sidebarItem: {
            color: this.props.primaryColor
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().li },
        React.createElement(
          Tile,
          { condensed: true },
          React.createElement(
            'div',
            { style: this.styles().number },
            this.props.sidebarNumber
          ),
          React.createElement(
            'a',
            { href: this.props.href, style: this.styles().sidebarItem },
            this.props.label
          )
        )
      );
    }
  }]);

  return SidebarItem;
})(ReactCSS.Component);