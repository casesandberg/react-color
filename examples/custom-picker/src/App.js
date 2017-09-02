/* eslint-disable no-alert */
import React from 'react'

import MyPicker from './MyPicker'

export const App = () => {
  const handleColorChange = ({ hex }) => alert(hex)

  return (
    <div>
      <MyPicker
        color="orange"
        onChangeComplete={ handleColorChange }
      />
    </div>
  )
}

export default App
