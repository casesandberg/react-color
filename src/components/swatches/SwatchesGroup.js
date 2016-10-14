import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import SwatchesColor from './SwatchesColor'

export const SwatchesGroup = ({ onClick, group, active }) => {
  const styles = reactCSS({
    'default': {
      group: {
        paddingBottom: '10px',
        width: '40px',
        float: 'left',
        marginRight: '10px',
      },
    },
  })

  return (
    <div style={ styles.group }>
      { map(group, (color, i) => (
        <SwatchesColor
          key={ color }
          color={ color }
          active={ color.toLowerCase() === active }
          first={ i === 0 }
          last={ i === group.length - 1 }
          onClick={ onClick }
        />
      )) }
    </div>
  )
}

export default SwatchesGroup
