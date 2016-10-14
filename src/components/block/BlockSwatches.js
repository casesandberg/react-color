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
        <Swatch
          key={ c }
          color={ c }
          style={ styles.swatch }
          onClick={ onClick }
        />
      )) }
      <div style={ styles.clear } />
    </div>
  )
}

export default BlockSwatches
