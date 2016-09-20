'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import color from '../../helpers/color'
import shallowCompare from 'react-addons-shallow-compare'

import { EditableInput } from '../common'

export class PhotoshopPicker extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleChange = (data: any) => {
    if (data['#']) {
      color.isValidHex(data['#']) && this.props.onChange({
        hex: data['#'],
        source: 'hex',
      })
    } else if (data.r || data.g || data.b) {
      this.props.onChange({
        r: data.r || this.props.rgb.r,
        g: data.g || this.props.rgb.g,
        b: data.b || this.props.rgb.b,
        source: 'rgb',
      })
    } else if (data.h || data.s || data.v) {
      this.props.onChange({
        h: data.h || this.props.hsv.h,
        s: data.s || this.props.hsv.s,
        v: data.v || this.props.hsv.v,
        source: 'hsv',
      })
    }
  }

  render(): any {
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

    return (
      <div style={ styles.fields }>
        <EditableInput
          style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
          label="h"
          value={ Math.round(this.props.hsv.h) }
          onChange={ this.handleChange }
        />
        <EditableInput
          style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
          label="s"
          value={ Math.round(this.props.hsv.s * 100) }
          onChange={ this.handleChange }
        />
        <EditableInput
          style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
          label="v"
          value={ Math.round(this.props.hsv.v * 100) }
          onChange={ this.handleChange }
        />
        <div style={ styles.divider } />
        <EditableInput
          style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
          label="r"
          value={ this.props.rgb.r }
          onChange={ this.handleChange }
        />
        <EditableInput
          style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
          label="g"
          value={ this.props.rgb.g }
          onChange={ this.handleChange }
        />
        <EditableInput
          style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
          label="b"
          value={ this.props.rgb.b }
          onChange={ this.handleChange }
        />
        <div style={ styles.divider } />
        <EditableInput
          style={{ wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel }}
          label="#"
          value={ this.props.hex.replace('#', '') }
          onChange={ this.handleChange }
        />
        <div style={ styles.fieldSymbols }>
          <div style={ styles.symbol }>°</div>
          <div style={ styles.symbol }>%</div>
          <div style={ styles.symbol }>%</div>
        </div>
      </div>
    )
  }
}

export default PhotoshopPicker
