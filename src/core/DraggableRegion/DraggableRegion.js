/* eslint-disable no-invalid-this, react/sort-comp */
import React from 'react'
import _ from 'lodash'

// https://github.com/react-component/slider/blob/a5853d130ef0df8c86c3be926bc896610126fcab/src/common/createSlider.jsx

import { keepInsideRange, NOOP } from './utils'

class DraggableRegion extends React.Component {
  region = null
  state = {
    dragging: false,
    width: null,
    height: null,
    left: null,
    top: null,
    insideTop: null,
    insideLeft: null,
    x: null,
    y: null,
  }

  componentDidMount() {
    const { width, height, left, top } = this.region.getBoundingClientRect()
    this.setState({ width, height, left, top })
  }

  componentWillReceiveProps(nextProps) {
    const { x, y } = this.state
    if (this.state.dragging === false && (x !== nextProps.x || y !== nextProps.y)) {
      this.setState({
        insideTop: this.state.width * nextProps.y,
        insideLeft: this.state.width * nextProps.x,
        x: nextProps.x,
        y: nextProps.y,
      })
    }
  }

  handleChange = ({ event, captureClientRect = false, dragging = true }) => {
    const { pageX, pageY } = event
    const { onChange = NOOP } = this.props
    const { width, height, left, top } = captureClientRect && this.region
      ? this.region.getBoundingClientRect()
      : this.state

    const insideTop = keepInsideRange({ position: pageY - top, end: height })
    const insideLeft = keepInsideRange({ position: pageX - left, end: width })
    const x = Number((insideLeft / width).toFixed(4)) || 0
    const y = Number((insideTop / height).toFixed(4)) || 0

    const change = {
      dragging,
      width,
      height,
      top,
      left,
      insideTop,
      insideLeft,
      x,
      y,
    }

    if (_.isEqual(this.state, change) === false) {
      this.setState(change)
      onChange(change)
    }
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
    this.handleChange({ event, dragging: false })
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
