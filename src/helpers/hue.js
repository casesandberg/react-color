export const calculateChange = (e, direction, hsl, container) => {
  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight

  if (direction === 'vertical') {
    const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
    const top = y - (container.getBoundingClientRect().top + window.pageYOffset)

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
    const prevH = hsl.h
    // Each step is a 0.5% movement in the slider. Repeated key press is supported when
    // onChange is used, but not onChangeComplete.
    const ArrowStep = containerWidth / 200
    const prevLeft = prevH * containerWidth / 360
    let left
    if (e.key === 'ArrowLeft') {
      left = prevLeft - ArrowStep
    }
    if (e.key === 'ArrowRight') {
      left = prevLeft + ArrowStep
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      // Prevent web-app from scrolling horizontally, only the slider should be moving.
      e.preventDefault()
    }
    if (!left && left !== 0) {
      let x
      if (typeof e.pageX === 'number') {
        x = e.pageX
      } else if (e.touches && e.touches.length) {
        x = e.touches[0].pageX
      }
      left = x - (container.getBoundingClientRect().left + window.pageXOffset)
    }

    let h
    if (left < 0) {
      h = 0
    } else if (left > containerWidth) {
      h = 359
    } else {
      h = 360 * left / containerWidth
    }
    if ((h || h === 0) && prevH !== h) {
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
