/* eslint-disable no-alert */
import React from 'react'

import { SketchPicker } from 'react-color'

export const App = () => {
  const handleColorChange = ({ hex }) => alert(hex)

  return (
    <div>
      <SketchPicker
        color="#333"
        onChangeComplete={ handleColorChange }
      />
    </div>
  )
}

export default App
