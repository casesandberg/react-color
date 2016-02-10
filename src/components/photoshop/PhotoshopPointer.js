'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'

export class PhotoshopPointerCircle extends ReactCSS.Component {

  classes(): any {
    return {
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
    }
  }

  render(): any {
    return (
      <div is="pointer">
        <div is="left">
          <div is="leftInside" />
        </div>

        <div is="right">
          <div is="rightInside" />
        </div>
      </div>
    )
  }

}

export default PhotoshopPointerCircle
