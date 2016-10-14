import React from 'react'
import reactCSS from 'reactcss'

const checkboardCache = {}

function renderCheckboard(c1, c2, size) {
  if (typeof document === 'undefined') return null // Dont Render On Server
  const canvas = document.createElement('canvas')
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

function getCheckboard(c1, c2, size) {
  const key = `${ c1 },${ c2 }, ${ size }`
  const checkboard = renderCheckboard(c1, c2, size)

  if (checkboardCache[key]) {
    return checkboardCache[key]
  }
  checkboardCache[key] = checkboard
  return checkboard
}

export const Checkboard = ({ white, grey, size }) => {
  const styles = reactCSS({
    'default': {
      grid: {
        absolute: '0px 0px 0px 0px',
        background: `url(${ getCheckboard(white, grey, size) }) center left`,
      },
    },
  })

  return (
    <div style={ styles.grid }></div>
  )
}

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
}

export default Checkboard
