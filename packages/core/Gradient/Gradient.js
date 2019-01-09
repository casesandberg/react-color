// @flow
import React from 'react'
import { randomId } from '@case/utils'

type CalculateOffset = {
  index: number,
  length: number,
}

export const calculateOffset = ({ index, length }: CalculateOffset) => {
  if (index === 0) {
    return 0
  } else if (index === length) {
    return 100
  }
  return (index * 100) / (length - 1)
}

type Props = {
  stops: Array<string>,
  start?: {
    x?: number,
    y?: number,
  },
  end?: {
    // $FlowFixMe
    x?: number,
    // $FlowFixMe
    y?: number,
  },
}

export const GradientDef = ({ stops = [], start = {}, end = {} }: Props) => {
  const id = randomId()
  return (
    // $FlowFixMe
    <>
      <defs>
        <linearGradient
          id={`linear-${id}`}
          x1={`${(start.x || 0) * 100}%`}
          y1={`${(start.y || 0) * 100}%`}
          x2={`${(end.x || 0) * 100}%`}
          y2={`${(end.y || 0) * 100}%`}
        >
          {stops.map((color, i) => (
            <stop
              key={`${color}-${i}`}
              offset={`${calculateOffset({ index: i, length: stops.length })}%`}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill={`url(#linear-${id})`} />
    </>
  )
}

export const HorizontalGradient = (props: Props) => (
  <svg style={{ flex: 1 }}>
    <GradientDef end={{ x: 1 }} {...props} />
  </svg>
)

export const VerticalGradient = (props: Props) => (
  <svg style={{ flex: 1 }}>
    <GradientDef end={{ y: 1 }} {...props} />
  </svg>
)
