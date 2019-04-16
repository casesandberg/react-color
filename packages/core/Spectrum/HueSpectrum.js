import React from 'react'
import { HorizontalGradient } from '../Gradient'
import { DraggableRegion } from '../DraggableRegion'

class HueSpectrum extends React.Component {
  render() {
    const { hue, styles } = this.props
    return (
      <DraggableRegion>
        {({ insideTop = 0, insideLeft = 0 }) => (
          <div style={styles.spectrum}>
            <div style={styles.cover} />
            <HorizontalGradient stops={[`hsla(${hue}, 100%, 50%, 1)`, `hsla(${hue}, 100%, 50%, 0)`]} />

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
}

export default HueSpectrum
