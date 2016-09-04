import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import { Swatch } from '../common'

export const BlockSwatches = (props) => {
  const styles = reactCSS({
    'default': {
      swatches: {
        paddingBottom: '10px',
        marginRight: '-10px',
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        borderRadius: '4px',
      },
      clear: {
        clear: 'both',
      },
    },
  })

  const handleClick = (color, e) => {
    props.onClick && props.onClick(color, e)
  }

  return (
    <div style={ styles.swatches }>
      { map(props.colors, (c) => {
        return (
          <Swatch color={ c } key={ c } style={ styles.swatch } onClick={ handleClick } />
        )
      }) }
      <div style={ styles.clear } />
    </div>
  )
}

export default BlockSwatches
