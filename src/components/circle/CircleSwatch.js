import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Swatch } from '../common'

export const CircleSwatch = ({ color, onClick, onSwatchHover, hover, active,
  circleSize, circleSpacing, borderColor }) => {
  const styles = reactCSS({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease',
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: `inset 0 0 0 ${ (circleSize / 2) + 1 }px ${ color }`,
        transition: '100ms box-shadow ease',
        border: `1px ${borderColor} solid`,
      },
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)',
      },
    },
    'active': {
      Swatch: {
        boxShadow: `inset 0 0 0 3px ${color}, inset 0 0 0 4px ${borderColor}`,
      },
    },
  }, { hover, active })

  return (
    <div style={ styles.swatch }>
      <Swatch
        style={ styles.Swatch }
        color={ color }
        onClick={ onClick }
        onHover={ onSwatchHover }
        focusStyle={{ boxShadow: `${styles.Swatch.boxShadow}, 0 0 5px ${borderColor}` }}
      />
    </div>
  )
}

CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14,
  borderColor: '#e0e0e0'
}

export default handleHover(CircleSwatch)
