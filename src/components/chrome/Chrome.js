'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'

import { ColorWrap, Saturation, Hue, Alpha, Checkboard } from '../common'
import ChromeFields from './ChromeFields'
import ChromePointer from './ChromePointer'
import ChromePointerCircle from './ChromePointerCircle'
import shallowCompare from 'react-addons-shallow-compare'

export class Chrome extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
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
          Absolute: '0px 0px 0px 0px',
          borderRadius: '8px',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
          background: 'rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', ' + this.props.rgb.a + ')',
          zIndex: '2',
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
      'disableAlpha': {
        color: {
          width: '22px',
        },
        alpha: {
          display: 'none',
        },
        hue: {
          marginBottom: '0px',
        },
        swatch: {
          width: '10px',
          height: '10px',
          marginTop: '0px',
        },
      },
    }
  }

  handleChange = (data: any) => {
    this.props.onChange(data)
  }

  render(): any {
    console.log(this.props.rgb)
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
          <ChromeFields {...this.props} onChange={ this.handleChange } disableAlpha={ this.props.disableAlpha } />
        </div>
      </div>
    )
  }

}

export default ColorWrap(Chrome)
