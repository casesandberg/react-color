'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var EditableInput = require('../common/EditableInput');

class ChromeFields extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        wrap: {
          paddingTop: '16px',
          display: 'flex',
        },
        fields: {
          flex: '1',
        },
        toggle: {
          width: '32px',
          textAlign: 'right',
        },
        Input: {
          style: {
            input: {
              fontSize: '11px',
              color: '#333',
              width: '100%',
              borderRadius: '2px',
              border: 'none',
              boxShadow: 'inset 0 0 0 1px #dadada',
              height: '21px',
              textAlign: 'center',
            },
            label: {
              textTransform: 'uppercase',
              fontSize: '11px',
              lineHeight: '11px',
              color: '#969696',
              textAlign: 'center',
              display: 'block',
              marginTop: '12px',
            },
          },
        },
      },
    };
  }

  handleChange(data) {
    this.props.onChange(data);
  }

  render() {
    return (
      <div is="wrap">
        <div is="fields">
          <EditableInput is="Input" label="hex" value={ '#aeee00' } />
        </div>
        <div is="toggle">
          |
        </div>
      </div>
    );
  }

}

module.exports = ChromeFields;
