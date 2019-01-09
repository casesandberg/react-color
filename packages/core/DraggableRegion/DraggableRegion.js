// @flow
/* eslint-disable no-invalid-this, react/sort-comp */
import React from 'react'
import type { Node } from 'react'
import _ from 'lodash'

// https://github.com/react-component/slider/blob/a5853d130ef0df8c86c3be926bc896610126fcab/src/common/createSlider.jsx

import { clamp, renderChildren } from '@case/utils'

type Props = {
  dragging?: boolean,
  width?: number,
  height?: number,
  top?: number,
  left?: number,
  insideTop?: number,
  insideLeft?: number,
  x?: number,
  y?: number,
  children?: Node | ((OnChange) => {}),
  render?: Node | ((OnChange) => {}),
  onChange?: (OnChange) => any,
}

type State = {
  dragging: boolean,
  width: number,
  height: number,
  top: number,
  left: number,
  insideTop: number,
  insideLeft: number,
  x: number,
  y: number,
}

type OnChange = {
  dragging: boolean,
  width: number,
  height: number,
  top: number,
  left: number,
  insideTop: number,
  insideLeft: number,
  x: number,
  y: number,
}

type HandleChange = {
  event: MouseEvent,
  captureClientRect?: boolean,
  dragging?: boolean,
}

class DraggableRegion extends React.Component<Props, State> {
  region = null
  state = {
    dragging: false,
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    insideTop: 0,
    insideLeft: 0,
    x: 0,
    y: 0,
  }

  componentDidMount() {
    if (this.region) {
      // SSR + Enzyme Shallow Testing Guard
      const { width, height, left, top } = this.region.getBoundingClientRect()
      this.setState({ width, height, left, top })
    }
  }

  componentWillReceiveProps({ x: nextX = 0, y: nextY = 0 }: Props) {
    const { x, y } = this.state
    if (this.state.dragging === false && (x !== nextX || y !== nextY)) {
      this.setState({
        insideTop: this.state.width * nextY,
        insideLeft: this.state.width * nextX,
        x: nextX,
        y: nextY,
      })
    }
  }

  handleChange = ({ event, captureClientRect = false, dragging = true }: HandleChange) => {
    const { pageX, pageY } = event
    const { onChange } = this.props
    const { width, height, left, top } =
      captureClientRect && this.region ? this.region.getBoundingClientRect() : this.state

    const insideTop = clamp({ value: pageY - top, max: height })
    const insideLeft = clamp({ value: pageX - left, max: width })
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
      onChange && onChange(change)
    }
  }

  handleMouseDown = (event: MouseEvent) => {
    this.handleChange({ event, captureClientRect: true })
    document.addEventListener('mousemove', this.handleMouseMove)
    document.addEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseMove = (event: MouseEvent) => {
    this.handleChange({ event })
  }

  handleMouseUp = (event: MouseEvent) => {
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
    return (
      <div
        ref={(region) => (this.region = region)}
        onMouseDown={this.handleMouseDown}
        style={{ display: 'flex', flex: 1, position: 'relative' }}
      >
        {renderChildren({ render, children, props: this.state })}
      </div>
    )
  }
}

export default DraggableRegion
