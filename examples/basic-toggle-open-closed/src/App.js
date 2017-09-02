/* eslint-disable no-console */
import React from 'react'

import { CompactPicker } from 'react-color'

class App extends React.Component {
  state = {
    pickerVisible: false,
  }

  render() {
    const handleColorChange = ({ hex }) => console.log(hex)
    const onTogglePicker = () => this.setState({ pickerVisible: !this.state.pickerVisible })

    return (
      <div>
        <button onClick={ onTogglePicker }>
          Toggle Picker
        </button>

        { this.state.pickerVisible && (
          <div style={{ position: 'absolute' }}>
            <CompactPicker
              color="#333"
              onChangeComplete={ handleColorChange }
            />
          </div>
        ) }
      </div>
    )
  }
}

export default App
