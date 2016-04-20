'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class SwatchesColor extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        color: {
          width: '40px',
          height: '24px',
          cursor: 'pointer',
          background: this.props.color,
          marginBottom: '1px',
        },
        check: {
          fill: '#fff',
          marginLeft: '8px',
          display: 'none',
        },
      },
      'first': {
        color: {
          overflow: 'hidden',
          borderRadius: '2px 2px 0px 0px',
        },
      },
      'last': {
        color: {
          overflow: 'hidden',
          borderRadius: '0px 0px 2px 2px',
        },
      },
      active: {
        check: {
          display: 'block',
        },
      },
    }
  }

  handleClick = () => {
    this.props.onClick(this.props.color)
  }

  render(): any {
    return (
      <div is="color" ref="color" onClick={ this.handleClick }>
        <div is="check">
          <svg style={{ width:'24px', height:'24px', }} viewBox="0 0 24 24">
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
          </svg>
        </div>
      </div>
    )
  }
}

export default SwatchesColor
