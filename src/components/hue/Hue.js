import React from 'react'
import reactCSS from 'reactcss'

import { ColorWrap, Hue } from '../common'
import HuePointer from './HuePointer'

export const HuePicker = ({ width, height, onChange, hsl, direction, pointer,
  className = '' }) => {
  const styles = reactCSS({
    'default': {
      picker: {
        position: 'relative',
        width,
        height,
      },
      hue: {
        radius: '2px',
      },
    },
  })

  // Overwrite to provide pure hue color
  const handleChange = data => onChange({ a: 1, h: data.h, l: 0.5, s: 1 })

  return (
    <div style={ styles.picker } className={ `hue-picker ${ className }` }>
      <Hue
        { ...styles.hue }
        hsl={ hsl }
        pointer={ pointer }
        onChange={ handleChange }
        direction={ direction }
      />
    </div>
  )
}

HuePicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: HuePointer,
}

export default ColorWrap(HuePicker)
