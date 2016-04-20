'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import { ColorWrap, Saturation, Hue, Alpha, Checkboard } from '../common'
import SketchFields from './SketchFields'
import SketchPresetColors from './SketchPresetColors'

export class Sketch extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        picker: {
          width: this.props.width,
          padding: '10px 10px 0px',
          boxSizing: 'initial',
          background: '#fff',
          borderRadius: '4px',
          boxShadow: '0px 0px 0px 1px rgba(0,0,0,.15), 0px 8px 16px rgba(0,0,0,.15)',
        },
        saturation: {
          width: '100%',
          paddingBottom: '75%',
          position: 'relative',
          overflow: 'hidden',
        },
        Saturation: {
          radius: '3px',
          shadow: 'inset 0px 0px 0px 1px rgba(0,0,0,.15), inset 0px 0px 4px rgba(0,0,0,.25)',
        },
        controls: {
          display: 'flex',
        },
        sliders: {
          padding: '4px 0px',
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
          Absolute: '0px 0px 0px 0px',
          borderRadius: '2px',
          background: 'rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', ' + this.props.rgb.a + ')',
          boxShadow: 'inset 0px 0px 0px 1px rgba(0,0,0,.15), inset 0px 0px 4px rgba(0,0,0,.25)',
          zIndex: '2',
        },
        hue: {
          position: 'relative',
          height: '10px',
          overflow: 'hidden',
        },
        Hue: {
          radius: '2px',
          shadow: 'inset 0px 0px 0px 1px rgba(0,0,0,.15), inset 0px 0px 4px rgba(0,0,0,.25)',
        },

        alpha: {
          position: 'relative',
          height: '10px',
          marginTop: '4px',
          overflow: 'hidden',
        },
        Alpha: {
          radius: '2px',
          shadow: 'inset 0px 0px 0px 1px rgba(0,0,0,.15), inset 0px 0px 4px rgba(0,0,0,.25)',
        },
      },
    }
  }

  handleChange = (data: any) => {
    this.props.onChange(data)
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
    )
  }
}

Sketch.defaultProps = {
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
  width: 200,
}

export default ColorWrap(Sketch)
