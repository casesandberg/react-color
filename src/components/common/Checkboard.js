import React, { isValidElement } from 'react'
import reactCSS from 'reactcss'
import * as checkboard from '../../helpers/checkboard'

export const Checkboard = ({ white, grey, size, renderers, borderRadius, boxShadow, children }) => {
  const styles = reactCSS({
    'default': {
      grid: {
        borderRadius,
        boxShadow,
        absolute: '0px 0px 0px 0px',
        background: `url(${ checkboard.get(white, grey, size, renderers.canvas) }) center left`,
      },
    },
  })  
  return isValidElement(children)?React.cloneElement(children, { ...children.props, style: {...children.props.style,...styles.grid}}):<div style={styles.grid}/>;
}

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {},
}

export default Checkboard
