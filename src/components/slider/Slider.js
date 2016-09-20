'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import { ColorWrap, Hue } from '../common'
import SliderSwatches from './SliderSwatches'
import SliderPointer from './SliderPointer'

export class Slider extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleChange = (data: any) => {
    this.props.onChange(data)
  }

  render(): any {
    const styles = reactCSS({
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
    })

    return (
      <div style={ styles.slider }>
        <div style={ styles.hue }>
          <Hue
            style={ styles.Hue }
            { ...this.props }
            pointer={ SliderPointer }
            onChange={ this.handleChange }
          />
        </div>
        <div style={ styles.swatches }>
          <SliderSwatches { ...this.props } onClick={ this.handleChange } />
        </div>
      </div>
    )
  }
}

export default ColorWrap(Slider)
