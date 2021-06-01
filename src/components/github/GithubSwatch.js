import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Swatch } from '../common'

export const GithubSwatch = ({ hover, color, onClick, onSwatchHover, active }) => {
  const hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
  }

  const styles = reactCSS({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
        fontSize: '0',
      },
    },
    'hover': {
      swatch: hoverSwatch,
    },
    'active': {
      swatch: hoverSwatch,
    },
  }, { hover, active })

  return (
    <div style={ styles.swatch }>
      <Swatch
        color={ color }
        onClick={ onClick }
        onHover={ onSwatchHover }
        focusStyle={ hoverSwatch }
      />
    </div>
  )
}

export default handleHover(GithubSwatch)
