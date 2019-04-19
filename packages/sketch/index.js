import React from 'react'
import defaultStyles from './styles'
import fakeHooks from '@color-picker/core/fakeHooks'
import { actions } from '@color-picker/core/usePickerStore'

import { AlphaSpectrum, ColorSpectrum, HueSpectrum } from '@color-picker/core/Spectrum'
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
  const handleAlphaChange = (value) => {
    dispatch(actions.change({ colorspace: 'rgb', change: { a: value } }))
  }
  const handleHueChange = (value) => {
    dispatch(actions.change({ colorspace: 'hsl', change: { h: value } }))
  }
  const handleColorSpectrumChange = (change) => {
    dispatch(actions.change({ colorspace: 'hsv', change }))
  }
  return (
    <div style={styles.picker}>
      <ColorSpectrum value={values.hsv} styles={styles.ColorSpectrum} onChange={handleColorSpectrumChange} />

      <div style={styles.controls}>
        <div style={styles.sliders}>
          <HueSpectrum value={values.hsl.h} styles={styles.HueSpectrum} onChange={handleHueChange} />
          <AlphaSpectrum
            rgb={values.rgb}
            value={values.rgb.a}
            styles={styles.AlphaSpectrum}
            onChange={handleAlphaChange}
          />
        </div>
        <CurrentSwatch color={values.hex} styles={styles.CurrentSwatch} />
      </div>
    </div>
  )
}

export default fakeHooks(SketchPicker)
