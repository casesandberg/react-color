'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class CompactColor extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleClick = () => {
    this.props.onClick({ hex: this.props.color })
  }

  render(): any {
    const styles = reactCSS({
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
          absolute: '5px 5px 5px 5px',
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
          boxShadow: 'inset 0 0 0 1px #ddd',
        },
        dot: {
          background: '#000',
        },
      },
    }, this.props)

    return (
      <div style={ styles.color } ref="color" onClick={ this.handleClick }>
        <div style={ styles.dot } />
      </div>
    )
  }
}

export default CompactColor
