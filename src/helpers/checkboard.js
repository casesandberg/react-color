const checkboardCache = {}

export const render = (c1, c2, size, serverCanvas) => {
  if (typeof document === 'undefined' && !serverCanvas) {
    return null
  }
  const canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas')
  canvas.width = size * 2
  canvas.height = size * 2
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return null
  } // If no context can be found, return early.
  ctx.fillStyle = c1
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = c2
  ctx.fillRect(0, 0, size, size)
  ctx.translate(size, size)
  ctx.fillRect(0, 0, size, size)
  return canvas.toDataURL()
}

export const get = (c1, c2, size, serverCanvas) => {
  const key = `${ c1 }-${ c2 }-${ size }${ serverCanvas ? '-server' : '' }`

  if (checkboardCache[key]) {
    return checkboardCache[key]
  }

  const checkboard = render(c1, c2, size, serverCanvas)
  checkboardCache[key] = checkboard
  return checkboard
}
