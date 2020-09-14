export const calculateChange = (e, direction, hsl, container) => {
  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight
  const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX
  const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
  const left = x - (container.getBoundingClientRect().left + window.pageXOffset)
  const top = y - (container.getBoundingClientRect().top + window.pageYOffset)

  if (direction === 'vertical') {
    let h
    if (top < 0) {
      h = 359
    } else if (top > containerHeight) {
      h = 0
    } else {
      const percent = -((top * 100) / containerHeight) + 100
      h = ((360 * percent) / 100)
    }

    if (hsl.h !== h) {
      return {
        h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl',
      }
    }
  } else {
    let h
    if (left < 0) {
      h = 0
    } else if (left > containerWidth) {
      h = 359
    } else {
      const percent = (left * 100) / containerWidth
      h = ((360 * percent) / 100)
    }

    if (hsl.h !== h) {
      return {
        h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl',
      }
    }
  }
  return null
}
