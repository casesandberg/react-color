import React from 'react'
import reactCSS from 'reactcss'

import { ColorWrap, Hue } from '../common'
import HuePointer from './HuePointer'

export const HuePicker = ({ width, height, onChange, hsl, direction, pointer }) => {
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

  return (
    <div style={ styles.picker } className="hue-picker">
      <Hue
        { ...styles.hue }
        hsl={ hsl }
        pointer={ pointer }
        onChange={ onChange }
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
