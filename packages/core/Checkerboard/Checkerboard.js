import React from 'react'

export const Checkerboard = ({
  size = 8,
  color = 'rgba(0,0,0,.08)',
}) => {
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


// import React from 'react '
// import reactCSS from 'reactcss'
// import * as checkboard from '../../helpers/checkboard'
//
// export const Checkboard = ({ white, grey, size, renderers, borderRadius, boxShadow }) => {
//   const styles = reactCSS({
//     'default': {
//       grid: {
//         borderRadius,
//         boxShadow,
//         absolute: '0px 0px 0px 0px',
//         background: `url(${ checkboard.get(white, grey, size, renderers.canvas) }) center left`,
//       },
//     },
//   })
//
//   return (
//     <div style={ styles.grid } />
//   )
// }
//
// Checkboard.defaultProps = {
//   size: 8,
//   white: 'transparent',
//   grey: 'rgba(0,0,0,.08)',
//   renderers: {},
// }
//
// export default Checkboard
