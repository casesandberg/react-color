'use strict'

import React from 'react'
import ColorPicker from 'react-color'

class ButtonExample extends React.Component {

  constructor() {
    super()
    this.state = {
      displayColorPicker: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose() {
    this.setState({ displayColorPicker: false })
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Pick Color</button>
        <ColorPicker display={ this.state.displayColorPicker } onClose={ this.handleClose } type="chrome" />
      </div>
    )
  }
}

export default ButtonExample
