'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import color from '../../helpers/color'
import shallowCompare from 'react-addons-shallow-compare'

import { ColorWrap, EditableInput } from '../common'
import BlockSwatches from './BlockSwatches'

export class Block extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleChange = (hex) => {
    color.isValidHex(hex) && this.props.onChange({
      hex,
      source: 'hex',
    })
  }

  render(): any {
    const styles = reactCSS({
      'default': {
        card: {
          width: this.props.width,
          background: '#fff',
          boxShadow: '0 1px rgba(0,0,0,.1)',
          borderRadius: '6px',
          position: 'relative',
        },
        head: {
          height: '110px',
          background: this.props.hex,
          borderRadius: '6px 6px 0 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        body: {
          padding: '10px',
        },
        label: {
          fontSize: '18px',
          color: '#fff',
        },
        triangle: {
          width: '0px',
          height: '0px',
          borderStyle: 'solid',
          borderWidth: '0 10px 10px 10px',
          borderColor: `transparent transparent ${ this.props.hex } transparent`,
          position: 'absolute',
          top: '-10px',
          left: '50%',
          marginLeft: '-10px',
        },
        input: {
          width: '100%',
          fontSize: '12px',
          color: '#666',
          border: '0px',
          outline: 'none',
          height: '22px',
          boxShadow: 'inset 0 0 0 1px #ddd',
          borderRadius: '4px',
          padding: '0 7px',
          boxSizing: 'border-box',
        },
      },
    })

    return (
      <div style={ styles.card } className="block-picker">
        <div style={ styles.triangle } />

        <div style={ styles.head }>
          <div style={ styles.label }>
            { this.props.hex }
          </div>
        </div>

        <div style={ styles.body }>
          <BlockSwatches colors={ this.props.colors } onClick={ this.handleChange } />
          <EditableInput
            placeholder="Hex Code"
            style={{ input: styles.input }}
            value=""
            onChange={ this.handleChange }
          />
        </div>
      </div>
    )
  }
}

Block.defaultProps = {
  width: '170px',
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555',
           '#dce775', '#ff8a65', '#ba68c8'],
}

export default ColorWrap(Block)
