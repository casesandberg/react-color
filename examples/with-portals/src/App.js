/* eslint-disable no-console */
import React from 'react'

import Portal from './Portal'

export class App extends React.Component {
  state = {
    pickerVisible: false,
  }

  handleToggleVisibility = () => {
    this.setState(({ pickerVisible }) => ({
      pickerVisible: !pickerVisible,
    }))
  }

  handleColorChange = ({ hex }) => console.log(hex)

  render() {
    return (
      <div>
        <button onClick={ this.handleToggleVisibility }>
          Pick Color
        </button>

        {this.state.pickerVisible && (
          <Portal
            onChange={ this.handleColorChange }
            onClose={ this.handleToggleVisibility }
          />
        )}
      </div>
    )
  }
}

export default App
