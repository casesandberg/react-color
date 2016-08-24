'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Saturation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Saturation = exports.Saturation = function (_React$Component) {
  _inherits(Saturation, _React$Component);

  function Saturation(props) {
    _classCallCheck(this, Saturation);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Saturation).call(this));

    _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]);

    _this.handleChange = function (e, skip) {
      !skip && e.preventDefault();
      var container = _this.refs.container;
      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;
      var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
      var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
      var inIFrame = window.self !== window.top || window.document !== container.ownerDocument;
      var left = x - (container.getBoundingClientRect().left + (inIFrame ? 0 : window.pageXOffset));
      var top = y - (container.getBoundingClientRect().top + (inIFrame ? 0 : window.pageYOffset));

      if (left < 0) {
        left = 0;
      } else if (left > containerWidth) {
        left = containerWidth;
      } else if (top < 0) {
        top = 0;
      } else if (top > containerHeight) {
        top = containerHeight;
      }

      var saturation = left * 100 / containerWidth;
      var bright = -(top * 100 / containerHeight) + 100;

      _this.throttle(_this.props.onChange, {
        h: _this.props.hsl.h,
        s: saturation,
        v: bright,
        a: _this.props.hsl.a,
        source: 'rgb'
      });
    };

    _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.throttle = (0, _throttle2.default)(function (fn, data) {
      fn(data);
    }, 50);
    return _this;
  }

  _createClass(Saturation, [{
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

      var styles = (0, _reactcss2.default)({
        'default': {
          color: {
            absolute: '0px 0px 0px 0px',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))'
          },
          black: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
            boxShadow: this.props.shadow
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
          }
        }
      });

      var pointer = _react2.default.createElement('div', { style: styles.circle });

      if (this.props.pointer) {
        pointer = _react2.default.createElement(this.props.pointer, this.props);
      }

      return _react2.default.createElement(
        'div',
        { style: styles.color, ref: 'container', onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange },
        _react2.default.createElement(
          'div',
          { style: styles.white },
          _react2.default.createElement('div', { style: styles.black }),
          _react2.default.createElement(
            'div',
            { style: styles.pointer, ref: 'pointer' },
            pointer
          )
        )
      );
    }
  }]);

  return Saturation;
}(_react2.default.Component);

exports.default = Saturation;