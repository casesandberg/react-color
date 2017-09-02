/* eslint-disable no-alert */
import React from 'react'

import { BlockPicker } from 'react-color'

export const App = () => {
  const handleColorChange = ({ hex }) => alert(hex)

  return (
    <div style={{ position: 'relative' }}>
      <button>
        Pick Color
      </button>

      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: 15,
        }}
      >
        <BlockPicker
          color="#333"
          onChangeComplete={ handleColorChange }
        />
      </div>
    </div>
  )
}

export default App
