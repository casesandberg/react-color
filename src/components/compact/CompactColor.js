'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class CompactColor extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        color: {
          background: this.props.color,
          width: '15px',
          height: '15px',
          float: 'left',
          marginRight: '5px',
          marginBottom: '5px',
          position: 'relative',
          cursor: 'pointer',
        },
        dot: {
          Absolute: '5px 5px 5px 5px',
          background: '#fff',
          borderRadius: '50%',
          opacity: '0',
        },
      },
      'active': {
        dot: {
          opacity: '1',
        },
      },
      'color-#FFFFFF': {
        color: {
          boxShadow: 'inset 0px 0px 0px 1px #ddd',
        },
        dot: {
          background: '#000',
        },
      },
    }
  }

  handleClick = () => {
    this.props.onClick({ hex: this.props.color })
  }

  render(): any {
    return (
      <div is="color" ref="color" onClick={ this.handleClick }>
        <div is="dot" />
      </div>
    )
  }
}

export default CompactColor
