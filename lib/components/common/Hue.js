'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hue = exports.Hue = function (_ReactCSS$Component) {
  _inherits(Hue, _ReactCSS$Component);

  function Hue() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Hue);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Hue)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (e, skip) {
      !skip && e.preventDefault();
      var container = _this.refs.container;
      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;
      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);
      var top = (e.pageY || e.touches[0].pageY) - (container.getBoundingClientRect().top + window.pageYOffset);

      if (_this.props.direction === 'vertical') {
        var h;
        if (top < 0) {
          h = 359;
        } else if (top > containerHeight) {
          h = 0;
        } else {
          var percent = -(top * 100 / containerHeight) + 100;
          h = 360 * percent / 100;
        }

        if (_this.props.hsl.h !== h) {
          _this.props.onChange({
            h: h,
            s: _this.props.hsl.s,
            l: _this.props.hsl.l,
            a: _this.props.hsl.a,
            source: 'rgb'
          });
        }
      } else {
        var h;
        if (left < 0) {
          h = 0;
        } else if (left > containerWidth) {
          h = 359;
        } else {
          var percent = left * 100 / containerWidth;
          h = 360 * percent / 100;
        }

        if (_this.props.hsl.h !== h) {
          _this.props.onChange({
            h: h,
            s: _this.props.hsl.s,
            l: _this.props.hsl.l,
            a: _this.props.hsl.a,
            source: 'rgb'
          });
        }
      }
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hue, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          hue: {
            Absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            margin: '0px 2px',
            position: 'relative',
            height: '100%'
          },
          pointer: {
            zIndex: '2',
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0px 0px 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'direction-vertical': {
          hue: {
            background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
          },
          pointer: {
            left: '0px',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
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
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
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
        { style: this.styles().hue },
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

  return Hue;
}(_reactcss2.default.Component);

exports.default = Hue;