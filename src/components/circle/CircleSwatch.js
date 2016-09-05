import React from 'react'
import reactCSS, { hover } from 'reactcss'

import { Swatch } from '../common'

export const CircleSwatch = (props) => {
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
        boxShadow: `inset 0 0 0 14px ${ props.color }`,
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
        boxShadow: `inset 0 0 0 3px ${ props.color }`,
      },
    },
  }, props)

  const handleClick = (color, e) => {
    props.onClick && props.onClick(color, e)
  }

  return (
    <div style={ styles.swatch }>
      <Swatch style={ styles.Swatch } color={ props.color } onClick={ handleClick } />
    </div>
  )
}

export default hover(CircleSwatch)
