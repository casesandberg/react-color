import React from 'react'
import reactCSS from 'reactcss'

import { ColorWrap, Alpha } from '../common'
import AlphaPointer from './AlphaPointer'

export const AlphaPicker = (props) => {
  const styles = reactCSS({
    'default': {
      alpha: {
        position: 'relative',
        width: props.width,
        height: props.height,
      },
      Alpha: {
        radius: '2px',
      },
    },
  })

  const handleChange = (data, e) => {
    props.onChange && props.onChange(data, e)
  }

  return (
    <div style={ styles.alpha } className="alpha-picker">
      <Alpha
        { ...styles.Alpha }
        { ...props }
        pointer={ AlphaPointer }
        onChange={ handleChange }
      />
    </div>
  )
}

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
}

export default ColorWrap(AlphaPicker)
