import React from 'react'
import reactCSS from 'reactcss'
import PropTypes from 'prop-types'

export const GooglePointer = (props) => {
  const styles = reactCSS({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        transform: 'translate(-10px, -7px)',
        background: `hsl(${ Math.round(props.hsl.h) }, 100%, 50%)`,
        border: '2px white solid',
      },
    },
  })

  return (
    <div style={ styles.picker } />
  )
}

GooglePointer.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number,
  }),
}

GooglePointer.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.50 },
}

export default GooglePointer
