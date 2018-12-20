import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import merge from 'lodash/merge'
import * as material from 'material-colors'

import { ColorWrap } from '../common'
import CircleSwatch from './CircleSwatch'

export const Circle = ({ width, onChange, onSwatchHover, colors, hex, circleSize,
  styles: passedStyles = {}, circleSpacing, className = '' }) => {
  const styles = reactCSS(merge({
    'default': {
      card: {
        width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing,
      },
    },
  }, passedStyles))

  const handleChange = (hexCode, e) => onChange({ hex: hexCode, source: 'hex' }, e)

  return (
    <div style={ styles.card } className={ `circle-picker ${ className }` }>
      { map(colors, c => (
        <CircleSwatch
          key={ c }
          color={ c }
          onClick={ handleChange }
          onSwatchHover={ onSwatchHover }
          active={ hex === c.toLowerCase() }
          circleSize={ circleSize }
          circleSpacing={ circleSpacing }
        />
      )) }
    </div>
  )
}

Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circleSize: PropTypes.number,
  circleSpacing: PropTypes.number,
  styles: PropTypes.object,
}

Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [material.red['500'], material.pink['500'], material.purple['500'],
    material.deepPurple['500'], material.indigo['500'], material.blue['500'],
    material.lightBlue['500'], material.cyan['500'], material.teal['500'],
    material.green['500'], material.lightGreen['500'], material.lime['500'],
    material.yellow['500'], material.amber['500'], material.orange['500'],
    material.deepOrange['500'], material.brown['500'], material.blueGrey['500']],
  styles: {},
}

export default ColorWrap(Circle)
