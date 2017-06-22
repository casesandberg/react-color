import React, { Component, PureComponent } from 'react'
import debounce from 'lodash/debounce'
import color from '../../helpers/color'

export const ColorWrap = (Picker) => {
  class ColorPicker extends (PureComponent || Component) {
    constructor(props) {
      super()

      this.state = {
        ...color.toState(props.color, 0),
      }

      this.debounce = debounce((fn, data, event) => {
        fn(data, event)
      }, 100)
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        ...color.toState(nextProps.color, this.state.oldHue),
      })
    }

    handleChange = (data, event) => {
      const isValidColor = color.simpleCheckForValidColor(data)
      if (isValidColor) {
        const colors = color.toState(data, data.h || this.state.oldHue)
        this.setState(colors)
        this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors, event)
        this.props.onChange && this.props.onChange(colors, event)
      }
    }

    handleSwatchHover = (data, event) => {
      const isValidColor = color.simpleCheckForValidColor(data)
      if (isValidColor) {
        const colors = color.toState(data, data.h || this.state.oldHue)
        this.setState(colors)
        this.props.onSwatchHover && this.props.onSwatchHover(colors, event)
      }
    }

    render() {
      let optionalEvents = {}
      if (this.props.onSwatchHover) {
        optionalEvents.onSwatchHover = this.handleSwatchHover
      }

      return <Picker { ...this.props } { ...this.state } onChange={ this.handleChange } { ...optionalEvents } />
    }
  }

  ColorPicker.defaultProps = {
    color: {
      h: 250,
      s: 0.50,
      l: 0.20,
      a: 1,
    },
  }

  return ColorPicker
}

export default ColorWrap
