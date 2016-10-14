export function calculateChange(e, skip, props, container) {
  !skip && e.preventDefault()
  const containerWidth = container.clientWidth
  const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX
  const inIFrame = window.self !== window.top || window.document !== container.ownerDocument
  const left = x - (container.getBoundingClientRect().left + (inIFrame ? 0 : window.pageXOffset))

  let a
  if (left < 0) {
    a = 0
  } else if (left > containerWidth) {
    a = 1
  } else {
    a = Math.round(left * 100 / containerWidth) / 100
  }

  if (props.a !== a) {
    return {
      h: props.hsl.h,
      s: props.hsl.s,
      l: props.hsl.l,
      a,
      source: 'rgb',
    }
  }
  return null
}
