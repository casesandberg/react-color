'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Github = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

var _GithubSwatch = require('./GithubSwatch');

var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Github = exports.Github = function (_React$Component) {
  _inherits(Github, _React$Component);

  function Github() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Github);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Github.__proto__ || Object.getPrototypeOf(Github)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (hex) {
      _this.props.onChange({ hex: hex, source: 'hex' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Github, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          card: {
            width: this.props.width,
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.2)',
            boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
            borderRadius: '4px',
            position: 'relative',
            padding: '5px',
            display: 'flex',
            flexWrap: 'wrap'
          },
          triangle: {
            position: 'absolute',
            border: '7px solid transparent',
            borderBottomColor: '#fff',
            top: '-14px',
            left: '10px'
          },
          triangleShadow: {
            position: 'absolute',
            border: '8px solid transparent',
            borderBottomColor: 'rgba(0,0,0,0.15)',
            top: '-16px',
            left: '9px'
          }
        }
      });

      return _react2.default.createElement(
        'div',
        { style: styles.card, className: 'github-picker' },
        _react2.default.createElement('div', { style: styles.triangleShadow }),
        _react2.default.createElement('div', { style: styles.triangle }),
        (0, _map2.default)(this.props.colors, function (c) {
          return _react2.default.createElement(_GithubSwatch2.default, { color: c, key: c, onClick: _this2.handleChange });
        })
      );
    }
  }]);

  return Github;
}(_react2.default.Component);

Github.defaultProps = {
  width: '200px',
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']
};

exports.default = (0, _common.ColorWrap)(Github);