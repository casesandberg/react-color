import React from 'react'
import { randomId } from '@case/utils'

export const calculateOffset = ({ index, length }) => {
  if (index === 0) {
    return 0
  } else if (index === length) {
    return 100
  }
  return (index * 100) / (length - 1)
}

export const GradientDef = ({
  stops = [],
  start = {},
  end = {},
}) => {
  const id = randomId()
  return (
    <>
      <defs>
        <linearGradient
          id={`linear-${ id }`}
          x1={ `${ (start.x || 0) * 100 }%` }
          y1={ `${ (start.y || 0) * 100 }%` }
          x2={ `${ (end.x || 0) * 100 }%` }
          y2={ `${ (end.y || 0) * 100 }%` }
        >
          { stops.map((color, i) => (
            <stop
              key={ `${ color }-${ i }` }
              offset={ `${ calculateOffset({ index: i, length: stops.length }) }%` }
              stopColor={ color }
            />
          )) }
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill={`url(#linear-${ id })`} />
    </>
  )
}

export const HorizontalGradient = (delegated) => (
  <svg style={{ flex: 1 }}>
    <GradientDef end={{ x: 1 }} { ...delegated } />
  </svg>
)

export const VerticalGradient = (delegated) => (
  <svg style={{ flex: 1 }}>
    <GradientDef end={{ y: 1 }} { ...delegated } />
  </svg>
)
