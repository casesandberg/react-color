/* jshint node: true, esnext: true */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _markdown = require('../helpers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _reactMaterialDesign = require('../../../react-material-design');

var _SidebarItem = require('./SidebarItem');

var _SidebarItem2 = _interopRequireDefault(_SidebarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          sidebar: {
            paddingTop: '20px',
            position: 'relative',
            width: '190px'
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
      }, this.props);

      var sidebarItems = [];

      for (var fileName in this.props.files) {
        if (this.props.files.hasOwnProperty(fileName)) {
          var file = this.props.files[fileName];
          var args = _markdown2.default.getArgs(file);
          var sectionNumber;
          if (_markdown2.default.isSubSection(fileName)) {
            sectionNumber = fileName.split('-')[0];
          } else {
            sectionNumber = false;
          }

          sidebarItems.push(_react2.default.createElement(_SidebarItem2.default, { key: fileName,
            sidebarNumber: sectionNumber,
            href: '#' + args.id,
            active: this.props.active === args.id,
            bold: sectionNumber && true,
            label: args.title,
            primaryColor: this.props.primaryColor }));
        }
      }

      return _react2.default.createElement(
        'div',
        { style: styles.sidebar },
        _react2.default.createElement(
          'div',
          { style: styles.star },
          this.props.bottom
        ),
        sidebarItems
      );
    }
  }]);

  return Sidebar;
}(_react2.default.Component);

;

exports.default = Sidebar;