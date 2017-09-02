/* eslint-disable no-alert */
import React from 'react'

import { BlockPicker } from 'react-color'

class App extends React.Component {
  state = {
    pickerVisible: false,
  }

  render() {
    const handleColorChange = ({ hex }) => alert(hex)
    const onTogglePicker = () => this.setState({ pickerVisible: !this.state.pickerVisible })

    return (
      <div style={{ position: 'relative' }}>
        <button onClick={ onTogglePicker }>
          Open Down
        </button>

        { this.state.pickerVisible && (
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
        ) }
      </div>
    )
  }
}

export default App
