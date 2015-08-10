'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var Saturation = require('../common/Saturation');
var Hue = require('../common/Hue');
var Alpha = require('../common/Alpha');
var SketchFields = require('./SketchFields');

class ColorPicker extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        picker: {
          width: '200px',
          padding: '10px 10px 0',
          background: '#fff',
          borderRadius: '4px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)',
        },
        saturation: {
          width: '100%',
          paddingBottom: '75%',
          position: 'relative',
        },
        Saturation: {
          radius: '3px',
          shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
        },
        controls: {
          display: 'flex',
        },
        sliders: {
          padding: '4px 0',
          flex: '1',
        },
        color: {
          width: '24px',
          height: '24px',
          position: 'relative',
          marginTop: '4px',
          marginLeft: '4px',
          borderRadius: '3px',
        },
        activeColor: {
          Absolute: '0 0 0 0',
          borderRadius: '3px',
          background: 'hsla(' + this.props.h + ', ' + this.props.s + '%, ' + this.props.l + '%, ' + (this.props.a / 100) + ')',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
        },
        hue: {
          position: 'relative',
          height: '10px',
        },
        Hue: {
          radius: '3px',
          shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
        },

        alpha: {
          position: 'relative',
          height: '10px',
          marginTop: '4px',
        },
        Alpha: {
          radius: '3px',
          shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
        },
      },
    };
  }

  handleChange(data) {
    this.props.onChange(data);
  }

  render() {
    return (
      <div is="picker">
        <div is="saturation">
          <Saturation is="Saturation" {...this.props} onChange={ this.handleChange }/>
        </div>
        <div is="controls">
          <div is="sliders">
            <div is="hue">
              <Hue is="Hue" value={ this.props.h } onChange={ this.handleChange } />
            </div>
            <div is="alpha">
              <Alpha is="Alpha" {...this.props} onChange={ this.handleChange } />
            </div>
          </div>
          <div is="color">
            <div is="activeColor"/>
          </div>
        </div>
        <div is="fields">
          <SketchFields {...this.props} />
        </div>
      </div>
    );
  }

}

module.exports = ColorPicker;
