/* eslint-disable no-console */
import React from 'react'

import { SketchPicker } from 'react-color'

export const App = () => {
  const handleColorChange = ({ hex }) => console.log(hex)

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
