import React from 'react'
import reactCSS from 'reactcss'

import SliderSwatch from './SliderSwatch'

export const SliderSwatches = ({ onClick, hsl }) => {
  const styles = reactCSS({
    'default': {
      swatches: {
        marginTop: '20px',
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        float: 'left',
      },
      clear: {
        clear: 'both',
      },
    },
  })

  // Acceptible difference in floating point equality
  const epsilon = 0.1

  return (
    <div style={ styles.swatches }>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".80"
          active={ Math.abs(hsl.l - 0.80) < epsilon
            && Math.abs(hsl.s - 0.50) < epsilon }
          onClick={ onClick }
          first
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".65"
          active={ Math.abs(hsl.l - 0.65) < epsilon
            && Math.abs(hsl.s - 0.50) < epsilon }
          onClick={ onClick }
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".50"
          active={ Math.abs(hsl.l - 0.50) < epsilon
            && Math.abs(hsl.s - 0.50) < epsilon }
          onClick={ onClick }
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".35"
          active={ Math.abs(hsl.l - 0.35) < epsilon
            && Math.abs(hsl.s - 0.50) < epsilon }
          onClick={ onClick }
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".20"
          active={ Math.abs(hsl.l - 0.20) < epsilon
            && Math.abs(hsl.s - 0.50) < epsilon }
          onClick={ onClick }
          last
        />
      </div>
      <div style={ styles.clear } />
    </div>
  )
}

export default SliderSwatches
