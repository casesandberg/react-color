import React from 'react'
import reactCSS from 'reactcss'
import colorUtils from '../../helpers/color'

import { Swatch } from '../common'

export const CompactColor = ({ color, onClick = () => {}, onSwatchHover, active }) => {
  const styles = reactCSS({
    'default': {
      color: {
        background: color,
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer',
      },
      dot: {
        absolute: '5px 5px 5px 5px',
        background: colorUtils.getContrastingColor(color),
        borderRadius: '50%',
        opacity: '0',
      },
    },
    'active': {
      dot: {
        opacity: '1',
      },
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd',
      },
      dot: {
        background: '#000',
      },
    },
    'transparent': {
      dot: {
        background: '#000',
      },
    },
  }, { active, 'color-#FFFFFF': color === '#FFFFFF', 'transparent': color === 'transparent' })

  return (
    <Swatch
      style={ styles.color }
      color={ color }
      onClick={ onClick }
      onHover={ onSwatchHover }
      focusStyle={{ boxShadow: `0 0 4px ${ color }` }}
    >
      <div style={ styles.dot } />
    </Swatch>
  )
}

export default CompactColor
