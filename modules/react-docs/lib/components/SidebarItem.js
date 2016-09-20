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

var _reactMaterialDesign = require('../../../react-material-design');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidebarItem = function (_React$Component) {
  _inherits(SidebarItem, _React$Component);

  function SidebarItem() {
    _classCallCheck(this, SidebarItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SidebarItem).apply(this, arguments));
  }

  _createClass(SidebarItem, [{
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
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
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.li },
        _react2.default.createElement(
          _reactMaterialDesign.Tile,
          { condensed: true },
          _react2.default.createElement(
            'div',
            { style: styles.number },
            this.props.sidebarNumber
          ),
          _react2.default.createElement(
            'a',
            { href: this.props.href, style: styles.sidebarItem },
            this.props.label
          )
        )
      );
    }
  }]);

  return SidebarItem;
}(_react2.default.Component);

;

exports.default = SidebarItem;