import React, { Component, PureComponent } from 'react'
import debounce from 'lodash/debounce'
import * as color from '../../helpers/color'

export const ColorWrap = (Picker) => {
  class ColorPicker extends (PureComponent || Component) {
    constructor(props) {
      super()

      this.state = {
        picker: { ...color.toState(props.color, 0) },
        previousColorProp: props.color
      }

      this.debounce = debounce((fn, data, event) => {
        fn(data, event)
      }, 100)
    }

    static getDerivedStateFromProps(nextProps, state) {
      if (nextProps.color !== state.previousColorProp) {
        return {
          picker: { ...color.toState(nextProps.color, state.picker.oldHue) },
          previousColorProp: nextProps.color
        }
      }
    }

    handleChange = (data, event) => {
      const isValidColor = color.simpleCheckForValidColor(data)
      if (isValidColor) {
        const colors = color.toState(data, data.h || this.state.picker.oldHue)
        this.setState({ picker: colors })
        this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors, event)
        this.props.onChange && this.props.onChange(colors, event)
      }
    }

    handleSwatchHover = (data, event) => {
      const isValidColor = color.simpleCheckForValidColor(data)
      if (isValidColor) {
        const colors = color.toState(data, data.h || this.state.picker.oldHue)
        this.props.onSwatchHover && this.props.onSwatchHover(colors, event)
      }
    }

    render() {
      const optionalEvents = {}
      if (this.props.onSwatchHover) {
        optionalEvents.onSwatchHover = this.handleSwatchHover
      }

      return (
        <Picker
          { ...this.props }
          { ...this.state.picker }
          onChange={ this.handleChange }
          { ...optionalEvents }
        />
      )
    }
  }

  ColorPicker.propTypes = {
    ...Picker.propTypes,
  }

  ColorPicker.defaultProps = {
    ...Picker.defaultProps,
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
