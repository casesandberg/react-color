import React from 'react'
import reactCSS from 'reactcss'

import { Checkboard } from './'

export const Swatch = ({ color, style, onClick = () => {}, title = color, children }) => {
  const transparent = color === 'transparent'
  const styles = reactCSS({
    default: {
      swatch: {
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        ...style,
      },
    },
  })

  const handleClick = (e) => onClick(color, e)

  return (
    <div style={ styles.swatch } onClick={ handleClick } title={ title }>
      { children }
      { transparent && (
        <Checkboard
          borderRadius={ styles.swatch.borderRadius }
          boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
        />
      ) }
    </div>
  )
}

export default Swatch
