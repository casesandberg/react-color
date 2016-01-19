'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwatchesGroup = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SwatchesColor = require('./SwatchesColor');

var _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwatchesGroup = exports.SwatchesGroup = function (_ReactCSS$Component) {
  _inherits(SwatchesGroup, _ReactCSS$Component);

  function SwatchesGroup() {
    _classCallCheck(this, SwatchesGroup);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SwatchesGroup).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SwatchesGroup, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          group: {
            paddingBottom: '10px',
            width: '40px',
            float: 'left',
            marginRight: '10px'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick(data) {
      this.props.onClick(data);
    }
  }, {
    key: 'render',
    value: function render() {
      var colors = [];
      for (var i = 0; i < this.props.group.length; i++) {
        var color = this.props.group[i];

        colors.push(_react2.default.createElement(_SwatchesColor2.default, { key: color, color: color, active: color.replace('#', '').toLowerCase() === this.props.active, first: i === 0, last: i === this.props.group.length - 1, onClick: this.handleClick }));
      }

      return _react2.default.createElement(
        'div',
        { style: this.styles().group, ref: 'group' },
        colors
      );
    }
  }]);

  return SwatchesGroup;
}(_reactcss2.default.Component);

exports.default = SwatchesGroup;