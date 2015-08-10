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
    this.handleBlur = this.handleBlur.bind(this);
  }

  classes() {
    return {
      'default': {
        input: {
          width: '80%',
          padding: '3px 10%',
          border: 'none',
          boxShadow: 'inset 0 0 0 1px #ddd',
          fontSize: '11px',
        },
      },
    };
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

  render() {
    return (
      <div is="wrap">
        <input is="input" ref="input" value={ this.state.value } onChange={ this.handleChange } onBlur={ this.handleBlur }/>
      </div>
    );
  }

}

module.exports = EditableInput;
