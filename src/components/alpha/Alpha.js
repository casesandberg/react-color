import React from 'react'
import reactCSS from 'reactcss'

import { ColorWrap, Alpha } from '../common'
import AlphaPointer from './AlphaPointer'

export const AlphaPicker = ({ 
  rgb, 
  hsl, 
  width = '316px', 
  height = '16px', 
  onChange, 
  direction = 'horizontal', 
  style,
  renderers, 
  pointer = AlphaPointer, 
  className = '' 
}) => {
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
    <div style={ styles.picker } className={ `alpha-picker ${ className }` }>
      <Alpha
        { ...styles.alpha }
        rgb={ rgb }
        hsl={ hsl }
        pointer={ pointer }
        renderers={ renderers }
        onChange={ onChange }
        direction={ direction }
      />
    </div>
  )
}

export default ColorWrap(AlphaPicker)
