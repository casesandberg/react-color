import React from 'react'
import reactCSS from 'reactcss'

import { ColorWrap, Alpha } from '../common'
import AlphaPointer from './AlphaPointer'

export const AlphaPicker = ({ rgb, hsl, width, height, onChange, style }) => {
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
      />
    </div>
  )
}

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
}

export default ColorWrap(AlphaPicker)
