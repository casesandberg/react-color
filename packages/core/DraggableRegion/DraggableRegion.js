// @flow
/* eslint-disable no-invalid-this, react/sort-comp */
import React, { type Node } from 'react'
import _ from 'lodash'

// https://github.com/react-component/slider/blob/a5853d130ef0df8c86c3be926bc896610126fcab/src/common/createSlider.jsx

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
  children?: (State) => Node,
  onChange?: (State) => any,
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

type HandleChange = {
  event: MouseEvent,
  captureClientRect?: boolean,
  dragging?: boolean,
}

const NOOP = (params: any): any => {}

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
      const nextState = { width, height, left, top }
      const position = this.getPositionFromProps(this.props, nextState)
      this.setState({ ...nextState, ...position })
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const newPosition = this.getPositionFromProps(nextProps, this.state)
    newPosition && this.setState(newPosition)
  }

  getPositionFromProps(props: Props, state: $Shape<State>) {
    if (this.state.dragging === false && (state.x !== props.x || state.y !== props.y)) {
      const nextX = props.x || 0
      const nextY = props.y || 0
      return {
        insideTop: state.width * nextY,
        insideLeft: state.width * nextX,
        x: nextX,
        y: nextY,
      }
    }

    return {}
  }

  handleChange = ({ event, captureClientRect = false, dragging = true }: HandleChange) => {
    const { pageX, pageY } = event
    const { onChange = NOOP } = this.props
    const { width, height, left, top } =
      captureClientRect && this.region ? this.region.getBoundingClientRect() : this.state

    const insideTop = Math.max(_.clamp(pageY - top, height), 0)
    const insideLeft = Math.max(_.clamp(pageX - left, width), 0)
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
    const { children = NOOP } = this.props
    return (
      <div ref={(region) => (this.region = region)} onMouseDown={this.handleMouseDown} style={{ position: 'relative' }}>
        {children(this.state)}
      </div>
    )
  }
}

export default DraggableRegion
