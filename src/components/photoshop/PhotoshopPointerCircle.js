import React from 'react'
import reactCSS from 'reactcss'

export const PhotoshopPointerCircle = ({ hsl }) => {
  const styles = reactCSS({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)',
      },
    },
    'black-outline': {
      picker: {
        boxShadow: 'inset 0 0 0 1px #000',
      },
    },
  }, { 'black-outline': hsl.l > 0.5 })

  return (
    <div style={ styles.picker } />
  )
}

export default PhotoshopPointerCircle
