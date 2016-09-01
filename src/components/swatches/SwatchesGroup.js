'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import shallowCompare from 'react-addons-shallow-compare'

import SwatchesColor from './SwatchesColor'

export class SwatchesGroup extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleClick = (data: any) => {
    this.props.onClick(data)
  }

  render(): any {
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
      <div style={ styles.group } ref="group">
        { map(this.props.group, (color, i) => {
          return (
            <SwatchesColor
              key={ color }
              color={ color }
              active={ color.toLowerCase() === this.props.active }
              first={ i === 0 }
              last={ i === this.props.group.length - 1 }
              onClick={ this.handleClick }
            />
          )
        }) }
      </div>
    )
  }
}

export default SwatchesGroup
