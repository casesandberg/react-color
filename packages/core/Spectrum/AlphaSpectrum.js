import React from 'react'
import { HorizontalGradient } from '../Gradient'
import { DraggableRegion } from '../DraggableRegion'

const AlphaSpectrum = ({ value, rgb, styles = {}, onChange }) => {
  const handleChange = ({ x }) => {
    const nextValue = Number(x.toFixed(2))

    if (value !== nextValue) {
      onChange(nextValue)
    }
  }

  return (
    <DraggableRegion onChange={handleChange} x={value}>
      {({ insideTop = 0, insideLeft = 0, handlers }) => (
        <div style={styles.spectrum} {...handlers}>
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
