'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import SwatchesColor from './SwatchesColor'

export class SwatchesGroup extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1]);

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  classes(): any {
    return {
      'default': {
        group: {
          paddingBottom: '10px',
          width: '40px',
          float: 'left',
          marginRight: '10px',
        },
      },
    }
  }

  handleClick(data: any) {
    this.props.onClick(data)
  }

  render(): any {
    var colors = []
    for (var i = 0; i < this.props.group.length; i++) {
      var color = this.props.group[i]

      colors.push(<SwatchesColor key={ color } color={ color } active={ color.replace('#', '').toLowerCase() === this.props.active } first={ i === 0 } last={ i === this.props.group.length - 1 } onClick={ this.handleClick } />)
    }

    return (
      <div is="group" ref="group">
        { colors }
      </div>
    )
  }

}

export default SwatchesGroup
