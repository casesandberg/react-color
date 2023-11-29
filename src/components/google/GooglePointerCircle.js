import React from 'react'
import reactCSS from 'reactcss'
import PropTypes from 'prop-types'

export const GooglePointerCircle = ({
  hsl = { a: 1, h: 249.94, l: 0.2, s: 0.50 }
}) => {
  const styles = reactCSS({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        border: '2px #fff solid',
        transform: 'translate(-12px, -13px)',
        background: `hsl(${ Math.round(hsl.h) }, ${ Math.round(hsl.s * 100 ) }%, ${ Math.round(hsl.l * 100) }%)`,
      },
    },
  })

  return (
    <div style={ styles.picker } />
  )
}

GooglePointerCircle.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number,
  }),
}

export default GooglePointerCircle