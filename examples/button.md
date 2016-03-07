```
'use strict'

import React from 'react'
import { ChromePicker } from 'react-color'

class ButtonExample extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    }
    return (
      <div>
        <button onClick={ this.handleClick }>Pick Color</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <ChromePicker />
        </div> : null }
      </div>
    )
  }
}

export default ButtonExample
```
