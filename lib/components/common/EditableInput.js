'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var EditableInput = (function (_ReactCSS$Component) {
  _inherits(EditableInput, _ReactCSS$Component);

  function EditableInput(props) {
    _classCallCheck(this, EditableInput);

    _get(Object.getPrototypeOf(EditableInput.prototype), 'constructor', this).call(this);

    this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    }, this.handleChange = this.handleChange.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
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
      var input = React.findDOMNode(this.refs.input);
      if (nextProps.value !== this.state.value) {
        if (input === document.activeElement) {
          this.setState({ blurValue: String(nextProps.value).toUpperCase() });
        } else {
          this.setState({ value: String(nextProps.value).toUpperCase() });
        }
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      if (this.state.blurValue) {
        this.setState({ value: this.state.blurValue, blurValue: null });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      if (this.props.label !== null) {
        var obj = {};
        obj[this.props.label] = e.target.value;
        this.props.onChange(obj);
      } else {
        this.props.onChange(e.target.value);
      }

      this.setState({ value: e.target.value });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      var number = Number(e.target.value);
      if (number) {
        var amount = this.props.arrowOffset || 1;

        // Up
        if (e.keyCode === 38) {
          if (this.props.label !== null) {
            var obj = {};
            obj[this.props.label] = number + amount;
            this.props.onChange(obj);
          } else {
            this.props.onChange(number + amount);
          }

          this.setState({ value: number + amount });
        }

        // Down
        if (e.keyCode === 40) {
          if (this.props.label !== null) {
            var obj = {};
            obj[this.props.label] = number - amount;
            this.props.onChange(obj);
          } else {
            this.props.onChange(number - amount);
          }

          this.setState({ value: number - amount });
        }
      }
    }
  }, {
    key: 'handleDrag',
    value: function handleDrag(e) {
      if (this.props.dragLabel) {
        var newValue = Math.round(this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= this.props.dragMax) {
          var obj = {};
          obj[this.props.label] = newValue;
          this.props.onChange(obj);
        }
      }
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      if (this.props.dragLabel) {
        e.preventDefault();
        this.handleDrag(e);
        window.addEventListener('mousemove', this.handleDrag);
        window.addEventListener('mouseup', this.handleMouseUp);
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      window.removeEventListener('mousemove', this.handleDrag);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var label;
      if (this.props.label) {
        label = React.createElement(
          'span',
          { style: this.styles().label, ref: 'label', onMouseDown: this.handleMouseDown },
          this.props.label
        );
      }

      return React.createElement(
        'div',
        { style: this.styles().wrap, ref: 'container' },
        React.createElement('input', { style: this.styles().input, ref: 'input', value: this.state.value, onKeyDown: this.handleKeyDown, onChange: this.handleChange, onBlur: this.handleBlur }),
        label
      );
    }
  }]);

  return EditableInput;
})(ReactCSS.Component);

module.exports = EditableInput;