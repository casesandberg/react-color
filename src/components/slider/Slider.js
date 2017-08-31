import React from 'react'
import reactCSS from 'reactcss'

import { ColorWrap, Hue } from '../common'
import SliderSwatches from './SliderSwatches'
import SliderPointer from './SliderPointer'

export const Slider = ({ hsl, onChange, pointer, className = '' }) => {
  const styles = reactCSS({
    'default': {
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
    <div className={ `slider-picker ${ className }` }>
      <div style={ styles.hue }>
        <Hue
          style={ styles.Hue }
          hsl={ hsl }
          pointer={ pointer }
          onChange={ onChange }
        />
      </div>
      <div style={ styles.swatches }>
        <SliderSwatches hsl={ hsl } onClick={ onChange } />
      </div>
    </div>
  )
}

Slider.defaultProps = {
  pointer: SliderPointer,
}

export default ColorWrap(Slider)
