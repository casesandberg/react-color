'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hue = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hue = exports.Hue = function (_ReactCSS$Component) {
  _inherits(Hue, _ReactCSS$Component);

  function Hue() {
    _classCallCheck(this, Hue);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Hue).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  _createClass(Hue, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          hue: {
            Absolute: '0 0 0 0',
            background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            margin: '0 2px',
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
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'direction-vertical': {
          hue: {
            background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
          },
          pointer: {
            left: '0',
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
    key: 'handleChange',
    value: function handleChange(e, skip) {
      !skip && e.preventDefault();
      var container = this.refs.container;
      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;
      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);
      var top = (e.pageY || e.touches[0].pageY) - (container.getBoundingClientRect().top + window.pageYOffset);

      if (this.props.direction === 'vertical') {
        var h;
        if (top < 0) {
          h = 359;
        } else if (top > containerHeight) {
          h = 0;
        } else {
          var percent = -(top * 100 / containerHeight) + 100;
          h = 360 * percent / 100;
        }

        if (this.props.hsl.h !== h) {
          this.props.onChange({ h: h, s: this.props.hsl.s, l: this.props.hsl.l, a: this.props.hsl.a });
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

        if (this.props.hsl.h !== h) {
          this.props.onChange({ h: h, s: this.props.hsl.s, l: this.props.hsl.l, a: this.props.hsl.a });
        }
      }
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
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
      var pointer = _react2.default.createElement('div', { is: 'slider' });

      if (this.props.pointer) {
        pointer = _react2.default.createElement(this.props.pointer, this.props);
      }

      return _react2.default.createElement(
        'div',
        { is: 'hue' },
        _react2.default.createElement(
          'div',
          { is: 'container', ref: 'container', onMouseDown: this.handleMouseDown, onTouchMove: this.handleChange },
          _react2.default.createElement(
            'div',
            { is: 'pointer', ref: 'pointer' },
            pointer
          )
        )
      );
    }
  }]);

  return Hue;
}(_reactcss2.default.Component);

exports.default = Hue;