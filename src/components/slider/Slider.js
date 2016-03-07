'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import { ColorWrap, Hue } from '../common'
import SliderSwatches from './SliderSwatches'
import SliderPointer from './SliderPointer'

export class Slider extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        slider: {
        },
        hue: {
          height: '12px',
          position: 'relative',
        },
        Hue: {
          radius: '2px',
        },
      },
    }
  }

  handleChange = (data: any) => {
    this.props.onChange(data)
  }

  render(): any {
    return (
      <div is="slider">
        <div is="hue">
          <Hue is="Hue" {...this.props} pointer={ SliderPointer } onChange={ this.handleChange } />
        </div>
        <div is="swatches">
          <SliderSwatches {...this.props} onClick={ this.handleChange }/>
        </div>
      </div>
    )
  }
}

export default ColorWrap(Slider)
