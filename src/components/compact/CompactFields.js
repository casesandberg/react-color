import React from 'react'
import reactCSS from 'reactcss'

import { EditableInput } from '../common'

export const CompactFields = ({ hex, rgb, onChange }) => {
  const styles = reactCSS({
    'default': {
      fields: {
        display: 'flex',
        paddingBottom: '6px',
        paddingRight: '5px',
        position: 'relative',
      },
      active: {
        position: 'absolute',
        top: '6px',
        left: '5px',
        height: '9px',
        width: '9px',
        background: hex,
      },
      HEXwrap: {
        flex: '6',
        position: 'relative',
      },
      HEXinput: {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px',
      },
      HEXlabel: {
        display: 'none',
      },
      RGBwrap: {
        flex: '3',
        position: 'relative',
      },
      RGBinput: {
        width: '70%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px',
      },
      RGBlabel: {
        position: 'absolute',
        top: '3px',
        left: '0px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: '#999',
      },
    },
  })

  const handleChange = (data) => {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb',
      })
    } else {
      onChange({
        hex: data.hex,
        source: 'hex',
      })
    }
  }

  return (
    <div style={ styles.fields } className="flexbox-fix">
      <div style={ styles.active } />
      <EditableInput
        style={{ wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel }}
        label="hex"
        value={ hex }
        onChange={ handleChange }
      />
      <EditableInput
        style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
        label="r"
        value={ rgb.r }
        onChange={ handleChange }
      />
      <EditableInput
        style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
        label="g"
        value={ rgb.g }
        onChange={ handleChange }
      />
      <EditableInput
        style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
        label="b"
        value={ rgb.b }
        onChange={ handleChange }
      />
    </div>
  )
}

export default CompactFields
