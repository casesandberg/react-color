import React from 'react'
import reactCSS from 'reactcss'

export const Swatch = (props) => {
  const styles = reactCSS({
    'default': {
      swatch: {
        background: props.color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
      },
    },
    'custom': {
      swatch: props.style,
    },
  }, 'custom')

  const handleClick = (e) => {
    props.onClick && props.onClick(props.color, e)
  }

  return (
    <div style={ styles.swatch } onClick={ handleClick } />
  )
}

export default Swatch
