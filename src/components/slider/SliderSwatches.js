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

  return (
    <div style={ styles.swatches }>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".80"
          active={ Math.round(hsl.l * 100) / 100 === 0.80
            && Math.round(hsl.s * 100) / 100 === 0.50 }
          onClick={ onClick }
          first
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".65"
          active={ Math.round(hsl.l * 100) / 100 === 0.65
            && Math.round(hsl.s * 100) / 100 === 0.50 }
          onClick={ onClick }
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".50"
          active={ Math.round(hsl.l * 100) / 100 === 0.50
             && Math.round(hsl.s * 100) / 100 === 0.50 }
          onClick={ onClick }
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".35"
          active={ Math.round(hsl.l * 100) / 100 === 0.35
            && Math.round(hsl.s * 100) / 100 === 0.50 }
          onClick={ onClick }
        />
      </div>
      <div style={ styles.swatch }>
        <SliderSwatch
          hsl={ hsl }
          offset=".20"
          active={ Math.round(hsl.l * 100) / 100 === 0.20
            && Math.round(hsl.s * 100) / 100 === 0.50 }
          onClick={ onClick }
          last
        />
      </div>
      <div style={ styles.clear } />
    </div>
  )
}

export default SliderSwatches
