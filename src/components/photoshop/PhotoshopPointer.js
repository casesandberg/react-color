'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class PhotoshopPointerCircle extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  render(): any {
    const styles = reactCSS({
      'default': {
        triangle: {
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '4px 0 4px 6px',
          borderColor: 'transparent transparent transparent #fff',
          position: 'absolute',
          top: '1px',
          left: '1px',
        },
        triangleBorder: {
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '5px 0 5px 8px',
          borderColor: 'transparent transparent transparent #555',
        },

        left: {
          Extend: 'triangleBorder',
          transform: 'translate(-13px, -4px)',
        },
        leftInside: {
          Extend: 'triangle',
          transform: 'translate(-8px, -5px)',
        },

        right: {
          Extend: 'triangleBorder',
          transform: 'translate(20px, -14px) rotate(180deg)',
        },
        rightInside: {
          Extend: 'triangle',
          transform: 'translate(-8px, -5px)',
        },
      },
    })

    return (
      <div style={ styles.pointer }>
        <div style={ styles.left }>
          <div style={ styles.leftInside } />
        </div>

        <div style={ styles.right }>
          <div style={ styles.rightInside } />
        </div>
      </div>
    )
  }
}

export default PhotoshopPointerCircle
