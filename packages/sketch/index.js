import React from 'react'
import defaultStyles from './styles'
import fakeHooks from '@color-picker/core/fakeHooks'
import { actions } from '@color-picker/core/usePickerStore'

import { ColorSpectrum, HueSpectrum } from '@color-picker/core/Spectrum'
import { Checkerboard } from '@color-picker/core/Checkerboard'

const CurrentSwatch = ({ color, styles }) => (
  <div style={{ position: 'relative', ...styles.swatch }}>
    <Checkerboard />
    <div
      style={{
        backgroundColor: color,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        ...styles.color,
      }}
    />
  </div>
)

const SketchPicker = ({ value = '#aeee00B3', styles = defaultStyles, usePickerStore }) => {
  const [values, dispatch] = usePickerStore(value)
  const handleHexChange = (hex) => {
    dispatch(actions.changeHex({ hex }))
  }
  return (
    <div style={styles.picker}>
      <ColorSpectrum hue={values.hsl.h} styles={styles.ColorSpectrum} />

      <div style={styles.controls}>
        <div style={styles.sliders}>
          <HueSpectrum hue={values.hsl.h} styles={styles.HueSpectrum} />
          <div style={styles.AlphaSpectrum.spectrum}>a</div>
        </div>
        <CurrentSwatch color={values.hex} styles={styles.CurrentSwatch} />
      </div>
    </div>
  )
}

export default fakeHooks(SketchPicker)
