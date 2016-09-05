'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import shallowCompare from 'react-addons-shallow-compare'

import { ColorWrap } from '../common'
import CircleSwatch from './CircleSwatch'

export class Circle extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleChange = (hex) => {
    this.props.onChange({ hex, source: 'hex' })
  }

  render(): any {
    const styles = reactCSS({
      'default': {
        card: {
          width: this.props.width,
          display: 'flex',
          flexWrap: 'wrap',
        },
      },
    })

    return (
      <div style={ styles.card }>
        { map(this.props.colors, (c) => {
          return (
            <CircleSwatch
              color={ c }
              key={ c }
              onClick={ this.handleChange }
              active={ this.props.hex === c.toLowerCase() }
            />
          )
        }) }
      </div>
    )
  }
}

Circle.defaultProps = {
  width: '252px',
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB',
           '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
}

export default ColorWrap(Circle)
