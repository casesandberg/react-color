'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import color from '../../helpers/color'
import shallowCompare from 'react-addons-shallow-compare'

import { Raised } from '../../../modules/react-material-design'
import { ColorWrap, EditableInput } from '../common'

export class Material extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        material: {
          width: '98px',
          height: '98px',
          padding: '16px',
          fontFamily: 'Roboto',
        },
        Hex: {
          style: {
            wrap: {
              position: 'relative',
            },
            input: {
              width: '100%',
              marginTop: '12px',
              fontSize: '15px',
              color: '#333',
              padding: '0px',
              border: '0px',
              borderBottom: '2px solid #' + this.props.hex,
              outline: 'none',
              height: '30px',
            },
            label: {
              position: 'absolute',
              top: '0px',
              left: '0px',
              fontSize: '11px',
              color: '#999999',
              textTransform: 'capitalize',
            },
          },
        },
        Input: {
          style: {
            wrap: {
              position: 'relative',
            },
            input: {
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
            label: {
              position: 'absolute',
              top: '0px',
              left: '0px',
              fontSize: '11px',
              color: '#999999',
              textTransform: 'capitalize',
            },
          },
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
        source: 'rgb',
      })
    }
  }

  render(): any {
    return (
      <Raised>
        <div is="material">
          <EditableInput is="Hex" label="hex" value={ '#' + this.props.hex } onChange={ this.handleChange } />
          <div is="split" className="flexbox-fix">
            <div is="third">
              <EditableInput is="Input" label="r" value={ this.props.rgb.r } onChange={ this.handleChange } />
            </div>
            <div is="third">
              <EditableInput is="Input" label="g" value={ this.props.rgb.g } onChange={ this.handleChange } />
            </div>
            <div is="third">
              <EditableInput is="Input" label="b" value={ this.props.rgb.b } onChange={ this.handleChange } />
            </div>
          </div>
        </div>
      </Raised>
    )
  }
}

export default ColorWrap(Material)
