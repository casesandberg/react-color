'use strict' /* @flow */

import React from 'react'
import merge from 'merge'
import isPlainObject from 'lodash.isplainobject'
import debounce from 'lodash.debounce'
import color from '../../helpers/color'
import shallowCompare from 'react-addons-shallow-compare'

export const ColorWrap = (Picker) => {
  class ColorPicker extends React.Component {
    shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1]);

    constructor(props: any) {
      super()

      this.state = merge(color.toState(props.color, 0), {
        visible: props.display,
      })

      this.debounce = debounce(function (fn: any, data: any) {
        fn(data)
      }, 100)
    }

    handleChange = (data: any) => {
      data = color.simpleCheckForValidColor(data)
      if (data) {
        var colors = color.toState(data, data.h || this.state.oldHue)
        this.setState(colors)
        this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors)
        this.props.onChange && this.props.onChange(colors)
      }
    }

    componentWillReceiveProps(nextProps: any) {
      this.setState(merge(color.toState(nextProps.color, this.state.oldHue), {
        visible: nextProps.display,
      }))
    }

    render(): any {
      return <Picker {...this.props} {...this.state} onChange={ this.handleChange } />
    }
  }

  ColorPicker.defaultProps = {
    color: {
      h: 250,
      s: .50,
      l: .20,
      a: 1,
    },
  }

  return ColorPicker
}

export default ColorWrap
