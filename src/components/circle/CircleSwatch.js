import React from 'react'
import reactCSS, { hover as handleHover } from 'reactcss'

import { Swatch } from '../common'

export const CircleSwatch = ({ color, onClick, hover, active }) => {
  const styles = reactCSS({
    'default': {
      swatch: {
        width: '28px',
        height: '28px',
        margin: '0 14px 14px 0',
        transform: 'scale(1)',
        transition: '100ms transform ease',
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: `inset 0 0 0 14px ${ color }`,
        transition: '100ms box-shadow ease',
      },
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)',
      },
    },
    'active': {
      Swatch: {
        boxShadow: `inset 0 0 0 3px ${ color }`,
      },
    },
  }, { hover, active })

  return (
    <div style={ styles.swatch }>
      <Swatch style={ styles.Swatch } color={ color } onClick={ onClick } />
    </div>
  )
}

export default handleHover(CircleSwatch)
