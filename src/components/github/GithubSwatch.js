import React from 'react'
import reactCSS, { hover } from 'reactcss'

import { Swatch } from '../common'

export const GithubSwatch = (props) => {
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
  }, props)

  const handleClick = (color, e) => {
    props.onClick && props.onClick(color, e)
  }

  return (
    <div style={ styles.swatch }>
      <Swatch color={ props.color } onClick={ handleClick } />
    </div>
  )
}

export default hover(GithubSwatch)
