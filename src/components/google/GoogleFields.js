import React from 'react'
import reactCSS from 'reactcss'
import color from '../../helpers/color'
import { EditableInput } from '../common'


export const GoogleFields = ({ onChange, rgb, hsl, hex, hsv }) => {

  const handleChange = (data, e) => {
    if (data.hex) {      
      color.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex',
      }, e)
    } else if (data.rgb) {
      const values = data.rgb.split(',')
      color.isvalidColorString(data.rgb, 'rgb') && onChange({
        r: values[0],
        g: values[1],
        b: values[2],
        a: 1,
        source: 'rgb',
      }, e)
    } else if (data.hsv){
      const values = data.hsv.split(',')      
      if (color.isvalidColorString(data.hsv, 'hsv')){
        values[2] = values[2].replace('%', '')
        values[1] = values[1].replace('%', '')
        values[0] = values[0].replace('°', '')
        if (values[1] == 1) {
          values[1] = 0.01
        } else if (values[2] == 1) {
          values[2] = 0.01
        }
        onChange({
          h: Number(values[0]),
          s: Number(values[1]),
          v: Number(values[2]),
          source: 'hsv',
        }, e)
      }
    } else if (data.hsl) {
      const values = data.hsl.split(',')
      if (color.isvalidColorString(data.hsl, 'hsl')){
        values[2] = values[2].replace('%', '')
        values[1] = values[1].replace('%', '')
        values[0] = values[0].replace('°', '')
        if (hsvValue[1] == 1) {
          hsvValue[1] = 0.01
        } else if (hsvValue[2] == 1) {
          hsvValue[2] = 0.01
        }
        onChange({
          h: Number(values[0]),
          s: Number(values[1]),
          v: Number(values[2]),
          source: 'hsl',
        }, e)
      }
    }
  }

  const styles = reactCSS({
    'default': {
      wrap: {
        display: 'flex',
        height: '100px',
        marginTop: '4px',
      },
      fields: {
        width: '100%',
      },
      column: {
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
      },
      double: {
        padding: '0px 4.4px',
        boxSizing: 'border-box',
      },
      input: {
        width: '100%',
        height: '38px',
        boxSizing: 'border-box',
        padding: '4px 10% 3px',
        textAlign: 'center',
        border: '1px solid #dadce0',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
        fontFamily: 'Roboto,Arial,sans-serif',
      },
      input2: {
        height: '38px',
        width: '100%',
        border: '1px solid #dadce0',
        boxSizing: 'border-box',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
        paddingLeft: '10px',
        fontFamily: 'Roboto,Arial,sans-serif',
      },
      label: {
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '35px',
        top: '-6px',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Roboto,Arial,sans-serif',
      },
      label2: {
        left: '10px',
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '32px',
        top: '-6px',
        fontFamily: 'Roboto,Arial,sans-serif',
      },
      single: {
        flexGrow: '1',
        margin: '0px 4.4px',
      },
    },
  })

  const rgbValue = `${ rgb.r }, ${ rgb.g }, ${ rgb.b }`    
  const hslValue = `${ Math.round(hsl.h) }°, ${ Math.round(hsl.s * 100) }%, ${ Math.round(hsl.l * 100) }%`
  const hsvValue = `${ Math.round(hsv.h) }°, ${ Math.round(hsv.s * 100) }%, ${ Math.round(hsv.v * 100) }%`

  return (
    <div style={ styles.wrap } className="flexbox-fix">
      <div style={ styles.fields }>
        <div style={ styles.double }>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="hex"
            value={ hex }
            onChange={ handleChange }
          />
        </div>
        <div style={ styles.column }>
          <div style={ styles.single }>
            <EditableInput
              style={{ input: styles.input2, label: styles.label2 }}
              label="rgb"
              value={ rgbValue }
              onChange={ handleChange }  
            />
          </div>
          <div style={ styles.single }>
            <EditableInput
              style={{ input: styles.input2, label: styles.label2 }}
              label="hsv"
              value={ hsvValue }
              onChange={ handleChange }
            />
          </div>
          <div style={ styles.single }>
            <EditableInput
              style={{ input: styles.input2, label: styles.label2 }}
              label="hsl"
              value={ hslValue }
              onChange={ handleChange }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoogleFields