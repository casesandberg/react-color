'use strict'; /* @flow */

import React from 'react';
import ReactCSS from 'reactcss';

export class EditableInput extends ReactCSS.Component {

  constructor(props: any) {
    super();

    this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase(),
    },

    this.handleChange = this.handleChange.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  classes(): any {
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

  styles(): any {
    return this.css({
      'user-override': true,
    });
  }

  componentWillReceiveProps(nextProps: any) {
    var input = this.refs.input;
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

  handleChange(e: any) {
    if (this.props.label !== null) {
      var obj = {};
      obj[this.props.label] = e.target.value;
      this.props.onChange(obj);
    } else {
      this.props.onChange(e.target.value);
    }

    this.setState({ value: e.target.value });
  }

  handleKeyDown(e: any) {
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

  handleDrag(e: any) {
    if (this.props.dragLabel) {
      var newValue = Math.round(this.props.value + e.movementX);
      if (newValue >= 0 && newValue <= this.props.dragMax) {
        var obj = {};
        obj[this.props.label] = newValue;
        this.props.onChange(obj);
      }
    }
  }

  handleMouseDown(e: any) {
    if (this.props.dragLabel) {
      e.preventDefault();
      this.handleDrag(e);
      window.addEventListener('mousemove', this.handleDrag);
      window.addEventListener('mouseup', this.handleMouseUp);
    }
  }

  handleMouseUp() {
    window.removeEventListener('mousemove', this.handleDrag);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  render(): any {
    var label;
    if (this.props.label) {
      label = <span is="label" ref="label" onMouseDown={ this.handleMouseDown }>{ this.props.label }</span>;
    }

    return (
      <div is="wrap" ref="container">
        <input is="input" ref="input" value={ this.state.value } onKeyDown={ this.handleKeyDown } onChange={ this.handleChange } onBlur={ this.handleBlur }/>
        { label }
      </div>
    );
  }
}

export default EditableInput;
