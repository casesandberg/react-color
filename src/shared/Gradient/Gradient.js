import React from 'react'

const calculateOffset = ({ index, length }) => {
  if (index === 0) {
    return 0
  } else if (index === length) {
    return 100
  }
  return (index * 100) / (length - 1)

}

export const Gradient = ({
  width,
  height,
  stops = [],
  start = {},
  end = {},
}) => (
  <svg style={{ flex: 1, width, height }}>
    <defs>
      <linearGradient
        id="linear"
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

    <rect width="100%" height="100%" fill="url(#linear)" />
  </svg>
)

export const HorizontalGradient = (delegated) =>
  <Gradient end={{ x: 1 }} { ...delegated } />

export const VerticalGradient = (delegated) =>
  <Gradient end={{ y: 1 }} { ...delegated } />
