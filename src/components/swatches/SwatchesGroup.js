'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
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
    });

    var colors = []
    for (var i = 0; i < this.props.group.length; i++) {
      var color = this.props.group[i]

      colors.push(<SwatchesColor key={ color } color={ color } active={ color.toLowerCase() === this.props.active } first={ i === 0 } last={ i === this.props.group.length - 1 } onClick={ this.handleClick } />)
    }

    return (
      <div style={ styles.group } ref="group">
        { colors }
      </div>
    )
  }
}

export default SwatchesGroup
