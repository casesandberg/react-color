import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import merge from 'lodash/merge'

import { ColorWrap, Hue } from '../common'
import HuePointer from './HuePointer'

export const HuePicker = ({ 
  width = '316px', 
  height = '16px', 
  onChange, 
  hsl, 
  direction = 'horizontal', 
  pointer = HuePointer,
  styles: passedStyles = {}, 
  className = '' 
}) => {
  const styles = reactCSS(merge({
    'default': {
      picker: {
        position: 'relative',
        width,
        height,
      },
      hue: {
        radius: '2px',
      },
    },
  }, passedStyles))

  // Overwrite to provide pure hue color
  const handleChange = data => onChange({ a: 1, h: data.h, l: 0.5, s: 1 })

  return (
    <div style={ styles.picker } className={ `hue-picker ${ className }` }>
      <Hue
        { ...styles.hue }
        hsl={ hsl }
        pointer={ pointer }
        onChange={ handleChange }
        direction={ direction }
      />
    </div>
  )
}

HuePicker.propTypes = {
  styles: PropTypes.object,
}

export default ColorWrap(HuePicker)
