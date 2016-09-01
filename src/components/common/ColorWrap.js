'use strict' /* @flow */

import React from 'react'
import merge from 'merge'
import debounce from 'lodash/debounce'
import color from '../../helpers/color'
import shallowCompare from 'react-addons-shallow-compare'

export const ColorWrap = (Picker) => {
  class ColorPicker extends React.Component {


    constructor(props: any) {
      super()

      this.state = merge(color.toState(props.color, 0), {
        visible: props.display,
      })

      this.debounce = debounce((fn: any, data: any) => {
        fn(data)
      }, 100)
    }

    componentWillReceiveProps(nextProps: any) {
      this.setState(merge(color.toState(nextProps.color, this.state.oldHue), {
        visible: nextProps.display,
      }))
    }

    shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1]);

    handleChange = (data: any) => {
      const isValidColor = color.simpleCheckForValidColor(data)
      if (isValidColor) {
        const colors = color.toState(data, data.h || this.state.oldHue)
        this.setState(colors)
        this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors)
        this.props.onChange && this.props.onChange(colors)
      }
    }

    render(): any {
      return <Picker { ...this.props } { ...this.state } onChange={ this.handleChange } />
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
