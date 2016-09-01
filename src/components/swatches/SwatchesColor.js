'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class SwatchesColor extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleClick = () => {
    this.props.onClick(this.props.color)
  }

  render(): any {
    const styles = reactCSS({
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
          borderRadius: '2px 2px 0 0',
        },
      },
      'last': {
        color: {
          overflow: 'hidden',
          borderRadius: '0 0 2px 2px',
        },
      },
      'active': {
        check: {
          display: 'block',
        },
      },
    }, this.props)

    return (
      <div style={ styles.color } ref="color" onClick={ this.handleClick }>
        <div style={ styles.check }>
          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
          </svg>
        </div>
      </div>
    )
  }
}

export default SwatchesColor
