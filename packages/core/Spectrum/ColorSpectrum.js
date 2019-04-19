import React from 'react'
import { GradientDef } from '../Gradient'
import { DraggableRegion } from '../DraggableRegion'

const coordinatesToValues = ({ x, y }) => ({ s: x * 100, l: y * 100 })
const valuesToCoordinates = ({ s, l }) => ({ x: s / 100, y: l / 100 })

class ColorSpectrum extends React.Component {
  render() {
    const { value, styles, onChange } = this.props
    const corrdinates = valuesToCoordinates(value)
    const handleChange = (coords) => {
      onChange(coordinatesToValues(coords))
    }

    return (
      <DraggableRegion {...corrdinates} onChange={handleChange}>
        {({ insideTop = 0, insideLeft = 0 }) => (
          <div style={styles.wrap}>
            <div style={styles.cover} />
            <svg style={{ backgroundColor: `hsla(${value.h}, 100%, 50%, 1)`, ...styles.spectrum }}>
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
}

export default ColorSpectrum
