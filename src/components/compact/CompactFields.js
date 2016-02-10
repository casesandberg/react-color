'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'

import { EditableInput } from '../common'

export class CompactColor extends ReactCSS.Component {

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  classes(): any {
    return {
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
          background: '#' + this.props.hex,
        },
        Hex: {
          style: {
            wrap: {
              flex: '6',
              position: 'relative',
            },
            input: {
              width: '80%',
              padding: '0',
              paddingLeft: '20%',
              border: 'none',
              outline: 'none',
              background: 'none',
              fontSize: '12px',
              color: '#333',
              height: '16px',
            },
            label: {
              display: 'none',
            },
          },
        },
        RGB: {
          style: {
            wrap: {
              flex: '3',
              position: 'relative',
            },
            input: {
              width: '70%',
              padding: '0',
              paddingLeft: '30%',
              border: 'none',
              outline: 'none',
              background: 'none',
              fontSize: '12px',
              color: '#333',
              height: '16px',
            },
            label: {
              position: 'absolute',
              top: '3px',
              left: '0',
              lineHeight: '16px',
              textTransform: 'uppercase',
              fontSize: '12px',
              color: '#999',
            },
          },
        },
      },
    }
  }

  handleChange(data: any) {
    if (data.r || data.g || data.b) {
      this.props.onChange({
        r: data.r || this.props.rgb.r,
        g: data.g || this.props.rgb.g,
        b: data.b || this.props.rgb.b,
      })
    } else {
      this.props.onChange(data)
    }
  }

  render(): any {
    return (
      <div is="fields" className="flexbox-fix">
        <div is="active" />
        <EditableInput is="Hex" label="hex" value={ '#' + this.props.hex } onChange={ this.handleChange } />
        <EditableInput is="RGB" label="r" value={ this.props.rgb.r } onChange={ this.handleChange } />
        <EditableInput is="RGB" label="g" value={ this.props.rgb.g } onChange={ this.handleChange } />
        <EditableInput is="RGB" label="b" value={ this.props.rgb.b } onChange={ this.handleChange } />
      </div>
    )
  }
}

export default CompactColor
