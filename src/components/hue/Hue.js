import React from 'react'
import reactCSS from 'reactcss'

import { ColorWrap, Hue } from '../common'
import HuePointer from './HuePointer'

export const HuePicker = (props) => {
  const styles = reactCSS({
    'default': {
      hue: {
        position: 'relative',
        width: props.width,
        height: props.height,
      },
      Hue: {
        radius: '2px',
      },
    },
  })

  const handleChange = (data, e) => {
    props.onChange && props.onChange(data, e)
  }

  return (
    <div style={ styles.hue } className="hue-picker">
      <Hue
        { ...styles.Hue }
        { ...props }
        pointer={ HuePointer }
        onChange={ handleChange }
      />
    </div>
  )
}

HuePicker.defaultProps = {
  width: '316px',
  height: '16px',
}

export default ColorWrap(HuePicker)
