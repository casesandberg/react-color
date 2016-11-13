import React from 'react'
import reactCSS from 'reactcss'
import color from '../../helpers/color'

import { EditableInput } from '../common'

export const PhotoshopPicker = ({ onChange, rgb, hsv, hex }) => {
  const styles = reactCSS({
    'default': {
      fields: {
        paddingTop: '5px',
        paddingBottom: '9px',
        width: '80px',
        position: 'relative',
      },
      divider: {
        height: '5px',
      },
      RGBwrap: {
        position: 'relative',
      },
      RGBinput: {
        marginLeft: '40%',
        width: '40%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '5px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px',
      },
      RGBlabel: {
        left: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px',
        position: 'absolute',
      },
      HEXwrap: {
        position: 'relative',
      },
      HEXinput: {
        marginLeft: '20%',
        width: '80%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '6px',
        fontSize: '13px',
        paddingLeft: '3px',
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px',
      },
      fieldSymbols: {
        position: 'absolute',
        top: '5px',
        right: '-7px',
        fontSize: '13px',
      },
      symbol: {
        height: '20px',
        lineHeight: '22px',
        paddingBottom: '7px',
      },
    },
  })

  const handleChange = (data, e) => {
    if (data['#']) {
      color.isValidHex(data['#']) && onChange({
        hex: data['#'],
        source: 'hex',
      }, e)
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb',
      }, e)
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: 'hsv',
      }, e)
    }
  }

  return (
    <div style={ styles.fields }>
      <EditableInput
        style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
        label="h"
        value={ Math.round(hsv.h) }
        onChange={ handleChange }
      />
      <EditableInput
        style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
        label="s"
        value={ Math.round(hsv.s * 100) }
        onChange={ handleChange }
      />
      <EditableInput
        style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
        label="v"
        value={ Math.round(hsv.v * 100) }
        onChange={ handleChange }
      />
      <div style={ styles.divider } />
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
      <div style={ styles.divider } />
      <EditableInput
        style={{ wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel }}
        label="#"
        value={ hex.replace('#', '') }
        onChange={ handleChange }
      />
      <div style={ styles.fieldSymbols }>
        <div style={ styles.symbol }>°</div>
        <div style={ styles.symbol }>%</div>
        <div style={ styles.symbol }>%</div>
      </div>
    </div>
  )
}

export default PhotoshopPicker
