'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alpha = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _Checkboard = require('./Checkboard');

var _Checkboard2 = _interopRequireDefault(_Checkboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alpha = exports.Alpha = function (_ReactCSS$Component) {
  _inherits(Alpha, _ReactCSS$Component);

  function Alpha() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Alpha);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Alpha)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (e, skip) {
      !skip && e.preventDefault();
      var container = _this.refs.container;
      var containerWidth = container.clientWidth;
      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);

      var a;
      if (left < 0) {
        a = 0;
      } else if (left > containerWidth) {
        a = 1;
      } else {
        a = Math.round(left * 100 / containerWidth) / 100;
      }

      if (_this.props.a !== a) {
        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: a,
          source: 'rgb'
        });
      }
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alpha, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          alpha: {
            Absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          checkboard: {
            Absolute: '0px 0px 0px 0px',
            overflow: 'hidden'
          },
          gradient: {
            Absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 0) 0%, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            zIndex: '2',
            height: '100%',
            margin: '0px 3px'
          },
          pointer: {
            zIndex: '2',
            position: 'absolute',
            left: this.props.rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0px 0px 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        }
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var pointer = _react2.default.createElement('div', { style: this.styles().slider });

      if (this.props.pointer) {
        pointer = _react2.default.createElement(this.props.pointer, this.props);
      }

      return _react2.default.createElement(
        'div',
        { style: this.styles().alpha },
        _react2.default.createElement(
          'div',
          { style: this.styles().checkboard },
          _react2.default.createElement(_Checkboard2.default, null)
        ),
        _react2.default.createElement('div', { style: this.styles().gradient }),
        _react2.default.createElement(
          'div',
          { style: this.styles().container, ref: 'container', onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange },
          _react2.default.createElement(
            'div',
            { style: this.styles().pointer, ref: 'pointer' },
            pointer
          )
        )
      );
    }
  }]);

  return Alpha;
}(_reactcss2.default.Component);

exports.default = Alpha;