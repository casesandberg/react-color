'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class EditableInput extends ReactCSS.Component {

  constructor(props) {
    super();

    this.state = {
      value: String(props.value).toUpperCase(),
    },

    this.handleChange = this.handleChange.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  classes() {
    return {
      'user-override': {
        wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
        input: this.props.style && this.props.style.input ? this.props.style.input : {},
        label: this.props.style && this.props.style.label ? this.props.style.label : {},
      },
      'dragLabel-true': {
        label: {
          cursor: 'ew-resize',
        },
      },
    };
  }

  styles() {
    return this.css({
      'user-override': true,
    });
  }

  componentWillReceiveProps(nextProps) {
    var input = React.findDOMNode(this.refs.input);
    if (nextProps.value !== this.state.value) {
      if (input === document.activeElement) {
        this.setState({ blurValue: String(nextProps.value).toUpperCase() });
      } else {
        this.setState({ value: String(nextProps.value).toUpperCase() });
      }
    }
  }

  handleBlur() {
    if (this.state.blurValue) {
      this.setState({ value: this.state.blurValue, blurValue: null });
    }
  }

  handleChange(e) {
    if (this.props.label !== null) {
      var obj = {};
      obj[this.props.label] = e.target.value;
      this.props.onChange(obj);
    } else {
      this.props.onChange(e.target.value);
    }

    this.setState({ value: e.target.value });
  }

  handleKeyDown(e) {
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

  handleDrag(e) {
    if (this.props.dragLabel) {
      var container = React.findDOMNode(this.refs.container);
      var containerWidth = container.clientWidth;
      var left = e.pageX - container.getBoundingClientRect().left;
      var newValue = Math.round(this.props.value + left);

      if (newValue >= 0 && newValue <= this.props.dragMax) {
        var obj = {};
        obj[this.props.label] = Math.round(newValue / 1);
        this.props.onChange(obj);
      }
    }
  }

  render() {
    var label;
    if (this.props.label) {
      label = <span is="label" draggable onDrag={ this.handleDrag }>{ this.props.label }</span>;
    }

    return (
      <div is="wrap" ref="container">
        <input is="input" ref="input" value={ this.state.value } onKeyDown={ this.handleKeyDown } onChange={ this.handleChange } onBlur={ this.handleBlur }/>
        { label }
      </div>
    );
  }
}

module.exports = EditableInput;
