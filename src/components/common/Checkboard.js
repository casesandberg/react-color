'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

const checkboardCache = {}

function renderCheckboard(c1: string, c2: string, size: number): any {
  if (typeof document === 'undefined') return null // Dont Render On Server
  const canvas: any = document.createElement('canvas')
  canvas.width = canvas.height = size * 2
  const ctx = canvas.getContext('2d')
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
  const key = `${ c1 },${ c2 }, ${ size }`
  const checkboard = renderCheckboard(c1, c2, size)

  if (checkboardCache[key]) {
    return checkboardCache[key]
  }
  checkboardCache[key] = checkboard
  return checkboard
}

export class Checkboard extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  render(): any {
    const styles = reactCSS({
      'default': {
        grid: {
          absolute: '0px 0px 0px 0px',
          background: `url(${ getCheckboard(this.props.white, this.props.grey,
            this.props.size) }) center left`,
        },
      },
    })

    return (
      <div style={ styles.grid } ref="grid"></div>
    )
  }
}

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
}

export default Checkboard
