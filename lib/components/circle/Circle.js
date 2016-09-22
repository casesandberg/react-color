'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _materialColors = require('material-colors');

var _materialColors2 = _interopRequireDefault(_materialColors);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

var _CircleSwatch = require('./CircleSwatch');

var _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = exports.Circle = function (_React$Component) {
  _inherits(Circle, _React$Component);

  function Circle() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Circle);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Circle.__proto__ || Object.getPrototypeOf(Circle)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (hex) {
      _this.props.onChange({ hex: hex, source: 'hex' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          card: {
            width: this.props.width,
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 -14px -14px 0'
          }
        }
      });

      return _react2.default.createElement(
        'div',
        { style: styles.card, className: 'circle-picker' },
        (0, _map2.default)(this.props.colors, function (c) {
          return _react2.default.createElement(_CircleSwatch2.default, {
            color: c,
            key: c,
            onClick: _this2.handleChange,
            active: _this2.props.hex === c.toLowerCase()
          });
        })
      );
    }
  }]);

  return Circle;
}(_react2.default.Component);

Circle.defaultProps = {
  width: '252px',
  colors: [_materialColors2.default.red['500'], _materialColors2.default.pink['500'], _materialColors2.default.purple['500'], _materialColors2.default.deepPurple['500'], _materialColors2.default.indigo['500'], _materialColors2.default.blue['500'], _materialColors2.default.lightBlue['500'], _materialColors2.default.cyan['500'], _materialColors2.default.teal['500'], _materialColors2.default.green['500'], _materialColors2.default.lightGreen['500'], _materialColors2.default.lime['500'], _materialColors2.default.yellow['500'], _materialColors2.default.amber['500'], _materialColors2.default.orange['500'], _materialColors2.default.deepOrange['500'], _materialColors2.default.brown['500'], _materialColors2.default.blueGrey['500']]
};

exports.default = (0, _common.ColorWrap)(Circle);