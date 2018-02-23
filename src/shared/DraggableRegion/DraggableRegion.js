/* eslint-disable no-invalid-this, react/sort-comp */
import React from 'react'

import { keepInsideRange, NOOP } from './utils'

class DraggableRegion extends React.Component {
  region = null
  state = {
    width: null,
    height: null,
    left: null,
    top: null,
    insideTop: null,
    insideLeft: null,
  }

  componentDidMount() {
    const { width, height, left, top } = this.region.getBoundingClientRect()
    this.setState({ width, height, left, top })
  }

  handleChange = ({ event, captureClientRect = false }) => {
    const { pageX, pageY } = event
    const { onChange = NOOP } = this.props
    const { width, height, left, top } = captureClientRect
      ? this.region.getBoundingClientRect()
      : this.state

    const insideTop = keepInsideRange({ position: pageY - top, end: height })
    const insideLeft = keepInsideRange({ position: pageX - left, end: width })
    const x = Number((insideLeft / width).toFixed(4))
    const y = Number((insideTop / height).toFixed(4))

    const change = {
      width,
      height,
      top,
      left,
      insideTop,
      insideLeft,
      x,
      y,
    }

    this.setState(change)
    onChange(change)
  }

  handleMouseDown = (event) => {
    this.handleChange({ event, captureClientRect: true })
    document.addEventListener('mousemove', this.handleMouseMove)
    document.addEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseMove = (event) => {
    this.handleChange({ event })
  }

  handleMouseUp = (event) => {
    this.handleChange({ event })
    document.removeEventListener('mousemove', this.handleMouseMove)
    document.removeEventListener('mouseup', this.handleMouseUp)
  }

  // TODO casesandberg add touch support
  // handleTouchStart = () => {
  //   console.log('handleTouchStart')
  //   window.addEventListener('touchmove', this.handleChange)
  //   window.addEventListener('touchend', this.handleMouseUp)
  // }

  render() {
    const { children, render } = this.props
    const renderChild = children || render || NOOP
    return (
      <div
        ref={ (region) => (this.region = region) }
        onMouseDown={ this.handleMouseDown }
        style={{ display: 'flex', flex: 1, position: 'relative' }}
      >
        { React.isValidElement(children) ? children : renderChild(this.state) }
      </div>
    )
  }
}

export default DraggableRegion
