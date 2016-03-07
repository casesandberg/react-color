'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableInput = undefined;

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

var EditableInput = exports.EditableInput = function (_ReactCSS$Component) {
  _inherits(EditableInput, _ReactCSS$Component);

  function EditableInput(props) {
    _classCallCheck(this, EditableInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditableInput).call(this));

    _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]);

    _this.handleBlur = function () {
      if (_this.state.blurValue) {
        _this.setState({ value: _this.state.blurValue, blurValue: null });
      }
    };

    _this.handleChange = function (e) {
      if (_this.props.label !== null) {
        var obj = {};
        obj[_this.props.label] = e.target.value;
        _this.props.onChange(obj);
      } else {
        _this.props.onChange(e.target.value);
      }

      _this.setState({ value: e.target.value });
    };

    _this.handleKeyDown = function (e) {
      var number = Number(e.target.value);
      if (number) {
        var amount = _this.props.arrowOffset || 1;

        // Up
        if (e.keyCode === 38) {
          if (_this.props.label !== null) {
            var obj = {};
            obj[_this.props.label] = number + amount;
            _this.props.onChange(obj);
          } else {
            _this.props.onChange(number + amount);
          }

          _this.setState({ value: number + amount });
        }

        // Down
        if (e.keyCode === 40) {
          if (_this.props.label !== null) {
            var obj = {};
            obj[_this.props.label] = number - amount;
            _this.props.onChange(obj);
          } else {
            _this.props.onChange(number - amount);
          }

          _this.setState({ value: number - amount });
        }
      }
    };

    _this.handleDrag = function (e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          var obj = {};
          obj[_this.props.label] = newValue;
          _this.props.onChange(obj);
        }
      }
    };

    _this.handleMouseDown = function (e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener('mousemove', _this.handleDrag);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    };

    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    return _this;
  }

  _createClass(EditableInput, [{
    key: 'classes',
    value: function classes() {
      return {
        'user-override': {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        'dragLabel-true': {
          label: {
            cursor: 'ew-resize'
          }
        }
      };
    }
  }, {
    key: 'styles',
    value: function styles() {
      return this.css({
        'user-override': true
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var input = this.refs.input;
      if (nextProps.value !== this.state.value) {
        if (input === document.activeElement) {
          this.setState({ blurValue: String(nextProps.value).toUpperCase() });
        } else {
          this.setState({ value: String(nextProps.value).toUpperCase() });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var label;
      if (this.props.label) {
        label = _react2.default.createElement(
          'span',
          { is: 'label', ref: 'label', onMouseDown: this.handleMouseDown },
          this.props.label
        );
      }

      return _react2.default.createElement(
        'div',
        { is: 'wrap', ref: 'container' },
        _react2.default.createElement('input', { is: 'input', ref: 'input', value: this.state.value, onKeyDown: this.handleKeyDown, onChange: this.handleChange, onBlur: this.handleBlur }),
        label
      );
    }
  }]);

  return EditableInput;
}(_reactcss2.default.Component);

exports.default = EditableInput;