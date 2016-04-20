'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import color from '../../helpers/color'
import shallowCompare from 'react-addons-shallow-compare'

import { EditableInput } from '../common'

export class PhotoshopPicker extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
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
        Input: {
          style: {
            wrap: {
              position: 'relative',
            },
            input: {
              marginLeft: '40%',
              width: '40%',
              height: '18px',
              border: '1px solid #888888',
              boxShadow: 'inset 0px 1px 1px rgba(0,0,0,.1), 0px 1px 0px 0px #ECECEC',
              marginBottom: '5px',
              fontSize: '13px',
              paddingLeft: '3px',
              marginRight: '10px',
            },
            label: {
              left: '0px',
              width: '34px',
              textTransform: 'uppercase',
              fontSize: '13px',
              height: '18px',
              lineHeight: '22px',
              position: 'absolute',
            },
          },
        },
        Hex: {
          style: {
            wrap: {
              position: 'relative',
            },
            input: {
              marginLeft: '20%',
              width: '80%',
              height: '18px',
              border: '1px solid #888888',
              boxShadow: 'inset 0px 1px 1px rgba(0,0,0,.1), 0px 1px 0px 0px #ECECEC',
              marginBottom: '6px',
              fontSize: '13px',
              paddingLeft: '3px',
            },
            label: {
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '14px',
              textTransform: 'uppercase',
              fontSize: '13px',
              height: '18px',
              lineHeight: '22px',
            },
          },
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
    }
  }

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
    return (
      <div is="fields">
        <EditableInput is="Input" label="h" value={ Math.round(this.props.hsv.h) } onChange={ this.handleChange }/>
        <EditableInput is="Input" label="s" value={ Math.round(this.props.hsv.s * 100) } onChange={ this.handleChange }/>
        <EditableInput is="Input" label="v" value={ Math.round(this.props.hsv.v * 100) } onChange={ this.handleChange }/>
        <div is="divider" />
        <EditableInput is="Input" label="r" value={ this.props.rgb.r } onChange={ this.handleChange }/>
        <EditableInput is="Input" label="g" value={ this.props.rgb.g } onChange={ this.handleChange }/>
        <EditableInput is="Input" label="b" value={ this.props.rgb.b } onChange={ this.handleChange }/>
        <div is="divider" />
        <EditableInput is="Hex" label="#" value={ this.props.hex } onChange={ this.handleChange }/>
        <div is="fieldSymbols">
          <div is="symbol">°</div>
          <div is="symbol">%</div>
          <div is="symbol">%</div>
        </div>
      </div>
    )
  }
}

export default PhotoshopPicker
