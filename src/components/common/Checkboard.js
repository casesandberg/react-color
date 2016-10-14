import React from 'react'
import reactCSS from 'reactcss'
import * as checkboard from '../../helpers/checkboard'

export const Checkboard = ({ white, grey, size }) => {
  const styles = reactCSS({
    'default': {
      grid: {
        absolute: '0px 0px 0px 0px',
        background: `url(${ checkboard.get(white, grey, size) }) center left`,
      },
    },
  })

  return (
    <div style={ styles.grid }></div>
  )
}

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
}

export default Checkboard
