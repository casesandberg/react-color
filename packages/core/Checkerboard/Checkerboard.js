// @flow
import React from 'react'

export type Props = {
  size?: number,
  color?: string,
}

export const Checkerboard = ({
  size = 8,
  color = 'rgba(0,0,0,.08)',
}: Props) => {
  return (
    <svg>
      <pattern
        id="checkerboard"
        x="0"
        y="0"
        width={ size * 2 }
        height={ size * 2 }
        patternUnits="userSpaceOnUse"
      >
        <rect
          fill={ color }
          x="0"
          width={ size }
          height={ size }
          y="0"
        />
        <rect
          fill={ color }
          x={ size }
          width={ size }
          height={ size }
          y={ size }
        />
      </pattern>

      <rect width="100%" height="100%" fill="url(#checkerboard)" />
    </svg>
  )
}

export default Checkerboard
