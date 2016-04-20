'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import color from '../../helpers/color'
import shallowCompare from 'react-addons-shallow-compare'

import { EditableInput } from '../common'

export class ShetchFields extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        fields: {
          display: 'flex',
          paddingTop: '4px',
        },
        single: {
          flex: '1',
          paddingLeft: '6px',
        },
        double: {
          flex: '2',
        },
        Input: {
          style: {
            input: {
              width: '80%',
              padding: '4px 10% 3px',
              border: 'none',
              boxShadow: 'inset 0px 0px 0px 1px #ccc',
              fontSize: '11px',
            },
            label: {
              display: 'block',
              textAlign: 'center',
              fontSize: '11px',
              color: '#222',
              paddingTop: '3px',
              paddingBottom: '4px',
              textTransform: 'capitalize',
            },
          },
        },
      },
    }
  }

  handleChange = (data: any) => {
    if (data.hex) {
      color.isValidHex(data.hex) && this.props.onChange({
        hex: data.hex,
        source: 'hex',
      })
    } else if (data.r || data.g || data.b) {
      this.props.onChange({
        r: data.r || this.props.rgb.r,
        g: data.g || this.props.rgb.g,
        b: data.b || this.props.rgb.b,
        a: this.props.rgb.a,
        source: 'rgb',
      })
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0
      } else if (data.a > 100) {
        data.a = 100
      }

      data.a = data.a / 100
      this.props.onChange({
        h: this.props.hsl.h,
        s: this.props.hsl.s,
        l: this.props.hsl.l,
        a: data.a,
        source: 'rgb',
      })
    }
  }

  render(): any {
    return (
      <div is="fields" className="flexbox-fix">
        <div is="double">
          <EditableInput is="Input" label="hex" value={ this.props.hex.replace('#', '') } onChange={ this.handleChange }/>
        </div>
        <div is="single">
          <EditableInput is="Input" label="r" value={ this.props.rgb.r } onChange={ this.handleChange } dragLabel="true" dragMax="255"/>
        </div>
        <div is="single">
          <EditableInput is="Input" label="g" value={ this.props.rgb.g } onChange={ this.handleChange } dragLabel="true" dragMax="255"/>
        </div>
        <div is="single">
          <EditableInput is="Input" label="b" value={ this.props.rgb.b } onChange={ this.handleChange } dragLabel="true" dragMax="255"/>
        </div>
        <div is="single">
          <EditableInput is="Input" label="a" value={ Math.round(this.props.rgb.a * 100) } onChange={ this.handleChange } dragLabel="true" dragMax="100"/>
        </div>
      </div>
    )
  }
}

export default ShetchFields
