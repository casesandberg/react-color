'use strict'

import React from 'react'
import ReactCSS from 'reactcss'
import ColorPicker from 'react-color'

class SketchExample extends ReactCSS.Component {

  constructor() {
    super()
    this.state = {
      displayColorPicker: false,
      color: '#F17013',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  classes() {
    return {
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: this.state.color,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
      },
    }
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose() {
    this.setState({ displayColorPicker: false })
  }

  handleChange(color) {
    this.setState({ color: '#' + color.hex })
  }

  render() {
    return (
      <div>
        <div is="swatch" onClick={ this.handleClick }>
          <div is="color" />
        </div>
        <ColorPicker color={ this.state.color } display={ this.state.displayColorPicker } position="below" onChange={ this.handleChange } onClose={ this.handleClose } type="sketch" />
      </div>
    )
  }
}

export default SketchExample
