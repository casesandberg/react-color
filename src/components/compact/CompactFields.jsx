'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var EditableInput = require('../common/EditableInput');

class CompactColor extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    var hex = tinycolor(this.props).toHex();

    return {
      'default': {
        fields: {
          display: 'flex',
          paddingBottom: '6px',
          paddingRight: '5px',
          position: 'relative',
        },
        active: {
          position: 'absolute',
          top: '6px',
          left: '5px',
          height: '9px',
          width: '9px',
          background: '#' + hex,
        },
        Hex: {
          style: {
            wrap: {
              flex: '6',
              position: 'relative',
            },
            input: {
              width: '80%',
              padding: '0',
              paddingLeft: '20%',
              border: 'none',
              outline: 'none',
              background: 'none',
              fontSize: '12px',
              color: '#333',
              height: '16px',
            },
            label: {
              display: 'none',
            },
          },
        },
        RGB: {
          style: {
            wrap: {
              flex: '3',
              position: 'relative',
            },
            input: {
              width: '70%',
              padding: '0',
              paddingLeft: '30%',
              border: 'none',
              outline: 'none',
              background: 'none',
              fontSize: '12px',
              color: '#333',
              height: '16px',
            },
            label: {
              position: 'absolute',
              top: '3px',
              left: '0',
              lineHeight: '16px',
              textTransform: 'uppercase',
              fontSize: '12px',
              color: '#999',
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
    var hex = tinycolor(this.props).toHex();
    var rgb = tinycolor(this.props).toRgb();

    return (
      <div is="fields">
        <div is="active" />
        <EditableInput is="Hex" label="hex" value={ '#' + hex } onChange={ this.handleChange } />
        <EditableInput is="RGB" label="r" value={ rgb.r } onChange={ this.handleChange } />
        <EditableInput is="RGB" label="g" value={ rgb.g } onChange={ this.handleChange } />
        <EditableInput is="RGB" label="b" value={ rgb.b } onChange={ this.handleChange } />
      </div>
    );
  }
}

module.exports = CompactColor;
