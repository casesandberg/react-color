'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

let _checkboardCache = {}

function renderCheckboard(c1: string, c2: string, size: number): any {
  if (typeof document == 'undefined') return null // Dont Render On Server
  var canvas: any = document.createElement('canvas')
  canvas.width = canvas.height = size * 2
  var ctx = canvas.getContext('2d')
  if (!ctx) return null // If no context can be found, return early.
  ctx.fillStyle = c1
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = c2
  ctx.fillRect(0, 0, size, size)
  ctx.translate(size, size)
  ctx.fillRect(0, 0, size, size)
  return canvas.toDataURL()
}

function getCheckboard(c1: string, c2: string, size: number): any {
  var key = c1 + ',' + c2 + ',' + size

  if (_checkboardCache[key]) {
    return _checkboardCache[key]
  } else {
    var checkboard = renderCheckboard(c1, c2, size)
    _checkboardCache[key] = checkboard
    return checkboard
  }
}

export class Checkboard extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    var background = getCheckboard(this.props.white, this.props.grey, this.props.size)
    return {
      'default': {
        grid: {
          Absolute: '0px 0px 0px 0px',
          background: 'url(' + background + ') center left',
        },
      },
    }
  }

  render(): any {
    return (
      <div is="grid" ref="grid"></div>
    )
  }

}

Checkboard.defaultProps = {
  size: 8,
  white: '#fff',
  grey: '#e6e6e6',
}

export default Checkboard
