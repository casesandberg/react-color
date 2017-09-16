import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import color from '../../helpers/color'

import { ColorWrap, EditableInput, Checkboard } from '../common'
import BlockSwatches from './BlockSwatches'

export const Block = ({ onChange, onSwatchHover, hex, colors, width, triangle,
  className = '' }) => {
  const transparent = hex === 'transparent'
  const handleChange = (hexCode, e) => {
    color.isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: 'hex',
    }, e)
  }

  const styles = reactCSS({
    'default': {
      card: {
        width,
        background: '#fff',
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '6px',
        position: 'relative',
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
      body: {
        padding: '10px',
      },
      label: {
        fontSize: '18px',
        color: color.getContrastingColor(hex),
        position: 'relative',
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: `transparent transparent ${ hex } transparent`,
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
    'hide-triangle': {
      triangle: {
        display: 'none',
      },
    },
  }, { 'hide-triangle': triangle === 'hide' })

  return (
    <div style={ styles.card } className={ `block-picker ${ className }` }>
      <div style={ styles.triangle } />

      <div style={ styles.head }>
        { transparent && (
          <Checkboard borderRadius="6px 6px 0 0" />
        ) }
        <div style={ styles.label }>
          { hex }
        </div>
      </div>

      <div style={ styles.body }>
        <BlockSwatches colors={ colors } onClick={ handleChange } onSwatchHover={ onSwatchHover } />
        <EditableInput
          style={{ input: styles.input }}
          value={ hex }
          onChange={ handleChange }
        />
      </div>
    </div>
  )
}

Block.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(['top', 'hide']),
}

Block.defaultProps = {
  width: 170,
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555',
    '#dce775', '#ff8a65', '#ba68c8'],
  triangle: 'top',
}

export default ColorWrap(Block)
