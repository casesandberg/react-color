/* jshint node: true, esnext: true */
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

module.exports = (function (_ReactCSS$Component) {
  _inherits(Tile, _ReactCSS$Component);

  function Tile() {
    _classCallCheck(this, Tile);

    _get(Object.getPrototypeOf(Tile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Tile, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          tile: {
            fontSize: '16px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            color: this.props.color
          },
          primary: {
            display: 'flex',
            width: '100%'
          },
          sidebar: {
            minWidth: '56px',
            maxWidth: '56px',
            flexBasis: '56' },
          // 72 minus 16
          content: {
            background: 'none',
            flex: '1',
            maxWidth: '95%'
          },
          secondary: {
            flexBasis: '42',
            textAlign: 'center'
          },
          sidebarIcon: {
            marginTop: '-12px',
            marginLeft: '-12px',
            marginBottom: '-12px'
          }
        },
        'divider': {
          tile: {
            boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.12)'
          }
        },
        'condensed': {
          tile: {
            paddingBottom: '0',
            paddingTop: '0'
          },
          sidebar: {
            minWidth: '28px',
            maxWidth: '28px',
            flexBasis: '28'
          }
        }
      };
    }
  }, {
    key: 'styles',
    value: function styles() {
      return this.css({
        'clickable': this.props.onClick
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$children = _slicedToArray(this.props.children, 2);

      var sidebar = _props$children[0];
      var content = _props$children[1];

      return React.createElement(
        'div',
        { style: this.styles().tile, className: 'flexbox-fix' },
        React.createElement(
          'div',
          { style: this.styles().primary, className: 'flexbox-fix' },
          React.createElement(
            'div',
            { style: this.styles().sidebar, key: "sidebar-#{ sidebar }" },
            sidebar
          ),
          React.createElement(
            'div',
            { style: this.styles().content, key: "content-#{ content }" },
            content
          )
        )
      );
    }
  }]);

  return Tile;
})(ReactCSS.Component);