import React from 'react'
import { HorizontalGradient } from '../Gradient'
import { DraggableRegion } from '../DraggableRegion'

const AlphaSpectrum = ({ value, rgb, styles = {}, onChange }) => {
  const handleChange = ({ x }) => {
    onChange(x.toFixed(2))
  }
  return (
    <DraggableRegion onChange={handleChange} x={value}>
      {({ insideTop = 0, insideLeft = 0 }) => (
        <div style={styles.spectrum}>
          <div style={styles.cover} />
          <HorizontalGradient
            stops={[`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`]}
          />

          <div
            style={{
              position: 'absolute',
              top: 0,
              transform: `translateX(${insideLeft}px)`,

              ...styles.picker,
            }}
          />
        </div>
      )}
    </DraggableRegion>
  )
}

export default AlphaSpectrum
