/* eslint-disable no-console */
import React from 'react'

import { GithubPicker } from 'react-color'

class App extends React.Component {
  state = {
    pickerVisible: false,
    activeColor: "#fff"
  }

  render() {
    const handleColorChange = ({ hex }) => { console.log(hex); this.setState({activeColor: hex})}
    const onTogglePicker = () => this.setState({ pickerVisible: !this.state.pickerVisible })

    return (
      <div>
        <button onClick={ onTogglePicker } style={{ backgroundColor: this.state.activeColor}}>
          Toggle Picker
        </button>

        { this.state.pickerVisible && (
          <div style={{ position: 'absolute' }}>
            <GithubPicker
              color={ this.state.activeColor }
              onChangeComplete={ handleColorChange }
            />
          </div>
        ) }
      </div>
    )
  }
}

export default App
