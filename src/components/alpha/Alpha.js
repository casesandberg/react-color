import React from 'react'
import reactCSS from 'reactcss'

import { ColorWrap, Alpha } from '../common'
import AlphaPointer from './AlphaPointer'

export const AlphaPicker = ({ rgb, hsl, width, height, onChange, direction, style }) => {
  const styles = reactCSS({
    'default': {
      picker: {
        position: 'relative',
        width,
        height,
      },
      alpha: {
        radius: '2px',
        style,
      },
    },
  })

  return (
    <div style={ styles.picker } className="alpha-picker">
      <Alpha
        { ...styles.alpha }
        rgb={ rgb }
        hsl={ hsl }
        pointer={ AlphaPointer }
        onChange={ onChange }
        direction={ direction }
      />
    </div>
  )
}

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
}

export default ColorWrap(AlphaPicker)
