'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var Saturation = require('../common/Saturation');
var Hue = require('../common/Hue');
var Alpha = require('../common/Alpha');

class ColorPicker extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        picker: {
          width: '200px',
          height: '400px',
          padding: '10px',
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
          background: 'rgba(' + this.props.rgb.join(',') + ', ' + (this.props.a / 100) + ')',
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

  render() {
    return (
      <div is="picker">
        <div is="saturation">
          <Saturation is="Saturation" h={ this.props.h } s={ this.props.s } l={ this.props.l }/>
        </div>
        <div is="controls">
          <div is="sliders">
            <div is="hue">
              <Hue is="Hue" value={ this.props.h } />
            </div>
            <div is="alpha">
              <Alpha is="Alpha" rgb={ this.props.rgb } value={ this.props.a } />
            </div>
          </div>
          <div is="color">
            <div is="activeColor" />
          </div>
        </div>
        <div>Sketch Picker</div>
      </div>
    );
  }

}

module.exports = ColorPicker;
