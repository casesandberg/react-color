import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import { Swatch } from '../common'

export const SketchPresetColors = ({ colors, onClick }) => {
  const styles = reactCSS({
    'default': {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0',
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      },
    },
    'no-presets': {
      colors: {
        display: 'none',
      },
    },
  }, {
    'no-presets': !colors || !colors.length,
  })

  const handleClick = (hex, e) => {
    onClick({
      hex,
      source: 'hex',
    }, e)
  }

  return (
    <div style={ styles.colors } className="flexbox-fix">
      { map(colors, (c) => (
        <div key={ c } style={ styles.swatchWrap }>
          <Swatch
            color={ c }
            style={ styles.swatch }
            onClick={ handleClick }
          />
        </div>
      )) }
    </div>
  )
}

export default SketchPresetColors
