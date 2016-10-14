import React from 'react'
import reactCSS from 'reactcss'
import color from '../../helpers/color'

import { Raised } from '../../../modules/react-material-design'
import { ColorWrap, EditableInput } from '../common'

export const Material = ({ onChange, hex, rgb }) => {
  const styles = reactCSS({
    'default': {
      material: {
        width: '98px',
        height: '98px',
        padding: '16px',
        fontFamily: 'Roboto',
      },
      HEXwrap: {
        position: 'relative',
      },
      HEXinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: `2px solid ${ hex }`,
        outline: 'none',
        height: '30px',
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize',
      },
      Hex: {
        style: {

        },
      },
      RGBwrap: {
        position: 'relative',
      },
      RGBinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '1px solid #eee',
        outline: 'none',
        height: '30px',
      },
      RGBlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize',
      },
      split: {
        display: 'flex',
        marginRight: '-10px',
        paddingTop: '11px',
      },
      third: {
        flex: '1',
        paddingRight: '10px',
      },
    },
  })

  const handleChange = (data) => {
    if (data.hex) {
      color.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex',
      })
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb',
      })
    }
  }

  return (
    <Raised>
      <div style={ styles.material } className="material-picker">
        <EditableInput
          style={{ wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel }}
          label="hex"
          value={ hex }
          onChange={ handleChange }
        />
        <div style={ styles.split } className="flexbox-fix">
          <div style={ styles.third }>
            <EditableInput
              style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
              label="r" value={ rgb.r }
              onChange={ handleChange }
            />
          </div>
          <div style={ styles.third }>
            <EditableInput
              style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
              label="g"
              value={ rgb.g }
              onChange={ handleChange }
            />
          </div>
          <div style={ styles.third }>
            <EditableInput
              style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
              label="b"
              value={ rgb.b }
              onChange={ handleChange }
            />
          </div>
        </div>
      </div>
    </Raised>
  )
}

export default ColorWrap(Material)
