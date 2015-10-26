'use strict'; /* @flow */

var React = require('react');
var ReactCSS = require('reactcss');

var { Saturation, Hue, Alpha, Checkboard } = require('../common');
var SketchFields = require('./SketchFields');
var SketchPresetColors = require('./SketchPresetColors');

class Sketch extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes(): any {
    return {
      'default': {
        picker: {
          padding: '0 8px 0',
          boxSizing: 'initial',
          lineHeight: '2',
        },
        saturation: {
          width: '100%',
          paddingBottom: '75%',
          position: 'relative',
          overflow: 'hidden',
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
          height: '24px',
          position: 'relative',
          marginTop: '4px',
          marginBottom: '4px',
          borderRadius: '3px',
        },
        activeColor: {
          Absolute: '0 0 0 0',
          borderRadius: '2px',
          background: 'rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', ' + this.props.rgb.a + ')',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
          zIndex: '2',
        },
        hue: {
          position: 'relative',
          height: '10px',
          overflow: 'hidden',
        },
        Hue: {
          radius: '2px',
          shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
        },
      },
    };
  }

  handleChange(data: any) {
    this.props.onChange(data);
  }

  render(): any {
    return (
      <div is="picker">
        <div is="saturation">
          <Saturation is="Saturation" {...this.props} onChange={ this.handleChange }/>
        </div>
        <div is="controls" className="flexbox-fix">
          <div is="sliders">
            <div is="hue">
              <Hue is="Hue" {...this.props} onChange={ this.handleChange } />
            </div>
          </div>
        </div>
        <div is="color">
          <div is="activeColor"/>
          <Checkboard />
        </div>
        <div is="fields">
          <SketchFields {...this.props} onChange={ this.handleChange } />
        </div>
        <div is="presets">
          <SketchPresetColors colors={ this.props.presetColors } onClick={ this.handleChange } />
        </div>
      </div>
    );
  }
}

Sketch.defaultProps = {
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
};

module.exports = Sketch;
