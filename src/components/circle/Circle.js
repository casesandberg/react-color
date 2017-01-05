import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import * as material from 'material-colors'

import { ColorWrap } from '../common'
import CircleSwatch from './CircleSwatch'

export const Circle = ({ width, onChange, colors, hex, circleSize, circleSpacing }) => {
  const styles = reactCSS({
    'default': {
      card: {
        width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing,
      },
    },
  })

  const handleChange = (hexCode, e) => onChange({ hex: hexCode, source: 'hex' }, e)

  return (
    <div style={ styles.card } className="circle-picker">
      { map(colors, (c) => (
        <CircleSwatch
          key={ c }
          color={ c }
          onClick={ handleChange }
          active={ hex === c.toLowerCase() }
          circleSize={ circleSize }
          circleSpacing={ circleSpacing }
        />
      )) }
    </div>
  )
}

Circle.defaultProps = {
  width: '252px',
  circleSize: 28,
  circleSpacing: 14,
  colors: [material.red['500'], material.pink['500'], material.purple['500'],
           material.deepPurple['500'], material.indigo['500'], material.blue['500'],
           material.lightBlue['500'], material.cyan['500'], material.teal['500'],
           material.green['500'], material.lightGreen['500'], material.lime['500'],
           material.yellow['500'], material.amber['500'], material.orange['500'],
           material.deepOrange['500'], material.brown['500'], material.blueGrey['500']],
}

export default ColorWrap(Circle)
