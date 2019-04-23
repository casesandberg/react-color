import React from 'react'
import { GradientDef } from '../Gradient'
import { DraggableRegion } from '../DraggableRegion'

const coordinatesToValues = ({ x, y }) => ({ s: x, v: -y + 1 })
const valuesToCoordinates = ({ s, v }) => ({ x: s, y: -v + 1 })

const ColorSpectrum = ({ value, styles = {}, onChange }) => {
  const corrdinates = valuesToCoordinates(value)
  const handleChange = (coords) => {
    const nextValue = coordinatesToValues(coords)

    if (value !== nextValue) {
      onChange(nextValue)
    }
  }

  return (
    <DraggableRegion {...corrdinates} onChange={handleChange}>
      {({ insideTop = 0, insideLeft = 0, handlers }) => (
        <div style={styles.spectrum} {...handlers}>
          <div style={styles.cover} />
          <svg style={{ backgroundColor: `hsla(${value.h}, 100%, 50%, 1)`, ...styles.svg }}>
            <GradientDef end={{ x: 1 }} stops={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']} />
            <GradientDef end={{ y: 1 }} stops={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
          </svg>
          <div
            style={{
              position: 'absolute',
              top: 0,
              transform: `translate(${insideLeft}px, ${insideTop}px)`,
              ...styles.picker,
            }}
          />
        </div>
      )}
    </DraggableRegion>
  )
}

export default ColorSpectrum
