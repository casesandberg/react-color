import React from 'react'

import { CustomPicker } from 'react-color'
import { EditableInput, Hue } from 'react-color/lib/components/common'

export const MyPicker = ({ hex, hsl, onChange }) => {
  const styles = {
    hue: {
      height: 10,
      position: 'relative',
      marginBottom: 10,
    },
    input: {
      height: 34,
      border: `1px solid ${ hex }`,
      paddingLeft: 10,
    },
    swatch: {
      width: 54,
      height: 38,
      background: hex,
    },
  }
  return (
    <div>
      <div style={ styles.hue }>
        <Hue hsl={ hsl } onChange={ onChange } />
      </div>

      <div style={{ display: 'flex' }}>
        <EditableInput
          style={{ input: styles.input }}
          value={ hex }
          onChange={ onChange }
        />
        <div style={ styles.swatch } />
      </div>
    </div>
  )
}

export default CustomPicker(MyPicker)
