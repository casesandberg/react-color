import React from 'react'
import { HorizontalGradient } from '../Gradient'
import { DraggableRegion } from '../DraggableRegion'

const HUE_RANGE = ['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#f00']
const coordinateToHue = (coord) => coord * 360
const hueToCoordinate = (hue) => hue / 360

const HueSpectrum = ({ value, styles = {}, onChange }) => {
  const handleChange = ({ x }) => {
    onChange(coordinateToHue(x))
  }
  return (
    <DraggableRegion onChange={handleChange} x={hueToCoordinate(value)}>
      {({ insideTop = 0, insideLeft = 0 }) => (
        <div style={styles.spectrum}>
          <div style={styles.cover} />
          <HorizontalGradient stops={HUE_RANGE} />

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

export default HueSpectrum
