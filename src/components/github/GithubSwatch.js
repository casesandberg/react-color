import React from 'react'
import reactCSS, { hover as handleHover } from 'reactcss'

import { Swatch } from '../common'

export const GithubSwatch = ({ hover, color, onClick }) => {
  const styles = reactCSS({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
      },
    },
    'hover': {
      swatch: {
        position: 'relative',
        zIndex: '2',
        outline: '2px solid #fff',
        boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)',
      },
    },
  }, { hover })

  return (
    <div style={ styles.swatch }>
      <Swatch color={ color } onClick={ onClick } />
    </div>
  )
}

export default handleHover(GithubSwatch)
