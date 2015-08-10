'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class EditableInput extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        input: {
          width: '80%',
          padding: '3px 10%',
          border: 'none',
          boxShadow: 'inset 0 0 0 1px #ddd',
          fontSize: '12px',
        },
      },
    };
  }

  render() {
    return (
      <div is="wrap">
        <input is="input" value={ this.props.value } readOnly/>
      </div>
    );
  }

}

module.exports = EditableInput;
