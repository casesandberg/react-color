/* eslint-disable no-console */
import React from 'react'

import MyPicker from './MyPicker'

export const App = () => {
  const handleColorChange = ({ hex }) => console.log(hex)

  return (
    <div>
      <MyPicker
        color="coral"
        onChangeComplete={ handleColorChange }
      />
    </div>
  )
}

export default App
