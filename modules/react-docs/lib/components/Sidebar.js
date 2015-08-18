/* jshint node: true, esnext: true */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var markdown = require('../helpers/markdown');

var _require = require('../../../react-material-design');

var Tile = _require.Tile;

var SidebarItem = require('./SidebarItem');

module.exports = (function (_ReactCSS$Component) {
  _inherits(Sidebar, _ReactCSS$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    _get(Object.getPrototypeOf(Sidebar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Sidebar, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          sidebar: {
            paddingTop: '20px',
            position: 'relative',
            width: '170px'
          },
          star: {
            display: 'none',
            position: 'absolute'
          }
        },
        'fixed': {
          sidebar: {
            top: '0',
            bottom: '0',
            position: 'fixed'
          },
          star: {
            bottom: '30px',
            top: 'auto',
            display: 'block'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {

      var sidebarItems = [];

      for (var fileName in this.props.files) {
        if (this.props.files.hasOwnProperty(fileName)) {
          var file = this.props.files[fileName];
          var args = markdown.getArgs(file);
          var sectionNumber;
          if (markdown.isSubSection(fileName)) {
            sectionNumber = fileName.split('-')[0];
          } else {
            sectionNumber = false;
          }

          sidebarItems.push(React.createElement(SidebarItem, { key: fileName,
            sidebarNumber: sectionNumber,
            href: '#' + args.id,
            active: this.props.active === args.id,
            bold: sectionNumber && true,
            label: args.title,
            primaryColor: this.props.primaryColor }));
        }
      }

      return React.createElement(
        'div',
        { style: this.styles().sidebar },
        React.createElement(
          'div',
          { style: this.styles().star },
          this.props.bottom
        ),
        sidebarItems
      );
    }
  }]);

  return Sidebar;
})(ReactCSS.Component);