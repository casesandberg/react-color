'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import { EditableInput } from '../common'

export class CompactColor extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleChange = (data: any) => {
    if (data.r || data.g || data.b) {
      this.props.onChange({
        r: data.r || this.props.rgb.r,
        g: data.g || this.props.rgb.g,
        b: data.b || this.props.rgb.b,
        source: 'rgb',
      })
    } else {
      this.props.onChange({
        hex: data.hex,
        source: 'hex',
      })
    }
  }

  render(): any {
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
          background: this.props.hex,
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

    return (
      <div style={ styles.fields } className="flexbox-fix">
        <div style={ styles.active } />
        <EditableInput
          style={{ wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel }}
          label="hex"
          value={ this.props.hex }
          onChange={ this.handleChange }
        />
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
      </div>
    )
  }
}

export default CompactColor
