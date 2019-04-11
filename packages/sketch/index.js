import React from 'react'

import fakeHooks from '../core/fakeHooks'
import { actions } from '../core/usePickerStore'
import { HexInput } from '../core/Input'

const Swatch = ({ color, onClick }) => {
  return (
    <div
      style={{ backgroundColor: color, color: '#fff', width: 40, height: 30, marginRight: 10, cursor: 'pointer' }}
      onClick={() => onClick(color)}
    />
  )
}

const SketchPicker = ({ value = '#aeee00', usePickerStore }) => {
  const [values, dispatch] = usePickerStore(value)

  const handleHexChange = (hex) => {
    dispatch(actions.changeHex({ hex }))
  }
  return (
    <div style={{ padding: 20, borderBottom: `2px solid ${values.hex}`, display: 'flex', flexDirection: 'row' }}>
      <Swatch color="#333" onClick={handleHexChange} />
      <Swatch color="red" onClick={handleHexChange} />
      <Swatch color="teal" onClick={handleHexChange} />
      <HexInput value={values.hex} onChange={({ value }) => handleHexChange(value)} />
    </div>
  )
}

export default fakeHooks(SketchPicker)
