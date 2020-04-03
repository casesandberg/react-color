import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Swatch } from '../common'

export const ChromeSwatch = ({ hover, color, onClick, onSwatchHover, colorObjOrString }) => {
  const hoverSwatch = {
    transition: 'scale, .1s',
    transform: 'scale(1.2)',
  }

  const styles = reactCSS({
    'default': {
      swatchWrap: {
        width: '12px',
        height: '12px',
        margin: '0 12px 12px 0',
      },
      swatch: {
        borderRadius: '2px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
      },
    },
    'hover': {
      swatch: hoverSwatch,
    },
  }, { hover })

  const c = typeof colorObjOrString === 'string'
    ? { color: colorObjOrString }
    : colorObjOrString

  const key = `${c.color}${c.title || ''}`

  return (
    <div style={ styles.swatchWrap }>
      <Swatch
        { ...c }
        key={ key }
        style={ styles.swatch }
        onClick={ onClick }
        onHover={ onSwatchHover }
        focusStyle={{
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 2px 0 #3C4CFF',
        }}
      />
    </div>
  )
}

export default handleHover(ChromeSwatch)
