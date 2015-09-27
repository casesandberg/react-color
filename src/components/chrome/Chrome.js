'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var { Saturation, Hue, Alpha, Checkboard } = require('../common');
var ChromeFields = require('./ChromeFields');
var ChromePointer = require('./ChromePointer');
var ChromePointerCircle = require('./ChromePointerCircle');

class Chrome extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        picker: {
          background: '#fff',
          borderRadius: '2px',
          boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
          boxSizing: 'initial',
          width: '225px',
          fontFamily: 'Menlo',
        },
        saturation: {
          width: '100%',
          paddingBottom: '55%',
          position: 'relative',
          borderRadius: '2px 2px 0 0',
          overflow: 'hidden',
        },
        Saturation: {
          radius: '2px 2px 0 0',
        },
        body: {
          padding: '16px 16px 12px',
        },
        controls: {
          display: 'flex',
        },
        color: {
          width: '32px',
        },
        swatch: {
          marginTop: '6px',
          width: '16px',
          height: '16px',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        },
        active: {
          Absolute: '0 0 0 0',
          zIndex: 2,
          borderRadius: '8px',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
          background: 'rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', ' + this.props.rgb.a + ')',
        },
        toggles: {
          flex: '1',
        },
        hue: {
          height: '10px',
          position: 'relative',
          marginBottom: '8px',
        },
        Hue: {
          radius: '2px',
        },
        alpha: {
          height: '10px',
          position: 'relative',
        },
        Alpha: {
          radius: '2px',
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
          <Saturation is="Saturation" {...this.props} pointer={ ChromePointerCircle } onChange={ this.handleChange }/>
        </div>
        <div is="body">
          <div is="controls" className="flexbox-fix">
            <div is="color">
              <div is="swatch">
                <div is="active" />
                <Checkboard />
              </div>
            </div>
            <div is="toggles">
              <div is="hue">
                <Hue is="Hue" {...this.props} pointer={ ChromePointer } onChange={ this.handleChange } />
              </div>
              <div is="alpha">
                <Alpha is="Alpha" {...this.props} pointer={ ChromePointer } onChange={ this.handleChange } />
              </div>
            </div>
          </div>
          <ChromeFields {...this.props} onChange={ this.handleChange } />
        </div>
      </div>
    );
  }

}

module.exports = Chrome;
