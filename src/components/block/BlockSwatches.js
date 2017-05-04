import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import { Swatch } from '../common'

export const BlockSwatches = ({ colors, onClick }) => {
  const styles = reactCSS({
    'default': {
      swatches: {
        marginRight: '-10px',
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
      },
      clear: {
        clear: 'both',
      },
    },
  })

  return (
    <div style={ styles.swatches }>
      { map(colors, (c) => (
        <div key={ c.hex || c }>
          <Swatch
            color={ c.hex || c }
            style={ styles.swatch }
            onClick={ onClick }
          />
          {c.label && <p>{c.label}</p>}
        </div>
      )) }
      <div style={ styles.clear } />
    </div>
  )
}

export default BlockSwatches
