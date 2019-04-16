import React from 'react'
import { GradientDef } from '../Gradient'
import { DraggableRegion } from '../DraggableRegion'

class ColorSpectrum extends React.Component {
  render() {
    const { hue, styles } = this.props
    return (
      <DraggableRegion>
        {({ insideTop = 0, insideLeft = 0 }) => (
          <div style={styles.wrap}>
            <div style={styles.cover} />
            <svg style={{ backgroundColor: `hsla(${hue}, 100%, 50%, 1)`, ...styles.spectrum }}>
              <GradientDef end={{ x: 1 }} stops={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']} />
              <GradientDef end={{ y: 1 }} stops={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
            </svg>

            <div
              style={{
                position: 'absolute',
                top: 0,
                transform: `translate(${insideLeft}px, ${insideTop})`,

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
