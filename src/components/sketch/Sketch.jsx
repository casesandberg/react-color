'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var Saturation = require('../common/Saturation');
var Hue = require('../common/Hue');
var Alpha = require('../common/Alpha');
var SketchFields = require('./SketchFields');
var SketchPresetColors = require('./SketchPresetColors');
var Checkboard = require('../common/Checkboard');

class Sketch extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    var rgb = tinycolor(this.props).toRgb();
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
          width: '24px',
          height: '24px',
          position: 'relative',
          marginTop: '4px',
          marginLeft: '4px',
          borderRadius: '3px',
        },
        activeColor: {
          Absolute: '0 0 0 0',
          borderRadius: '2px',
          background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + this.props.a + ')',
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

        alpha: {
          position: 'relative',
          height: '10px',
          marginTop: '4px',
          overflow: 'hidden',
        },
        Alpha: {
          radius: '2px',
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
            <Checkboard />
          </div>
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
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
};

module.exports = Sketch;
