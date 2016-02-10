'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import merge from 'merge'
import isPlainObject from 'lodash.isplainobject'
import debounce from 'lodash.debounce'
import color from '../helpers/color'

import Sketch from './sketched/Sketch'

class ColorPicker extends ReactCSS.Component {

  constructor(props: any) {
    super()

    this.state = merge(color.toState(props.color, 0), {
      visible: props.display,
    })

    this.debounce = debounce(function(fn: any, data: any) {
      fn(data)
    }, 100)

    this.handleChange = this.handleChange.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.handleAccept = this.handleAccept.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  classes(): any {
    return {
      'show': {
        wrap: {
          zIndex: '999',
          position: 'absolute',
          display: 'block',
        },
        picker: {
          zIndex: '2',
          position: 'relative',
        },
        cover: {
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
        },
      },
      'hide': {
        wrap: {
          zIndex: '999',
          position: 'absolute',
          display: 'none',
        },
      },
      'right': {
        wrap: {
          left: '100%',
          marginLeft: '20px',
          top: '0',
        },
      },
      'left': {
        wrap: {
          right: '100%',
          marginRight: '20px',
          top: '0',
        },
      },
      'below': {
        wrap: {
          left: '0',
          marginLeft: '0',
          top: '100%',
          marginTop: '20px',
        },
      },
      'override': {
        wrap: this.props.positionCSS,
      },
    }
  }

  styles(): any {
    return this.css({
      'below': this.props.position === 'below' && this.props.display !== null,
      'right': this.props.position === 'right' && this.props.display !== null,
      'left': this.props.position === 'left' && this.props.display !== null,
      'show': this.state.visible === true,
      'hide': this.state.visible === false,
      'override': isPlainObject(this.props.positionCSS),
    })
  }

  handleHide() {
    if (this.state.visible === true) {
      this.setState({
        visible: false,
      })
      this.props.onClose && this.props.onClose({
        hex: this.state.hex,
        hsl: this.state.hsl,
        rgb: this.state.rgb,
      })
    }
  }

  handleAccept() {
    this.handleHide()
  }

  handleCancel() {
    if (this.state.visible === true) {
      this.setState({
        visible: false,
      })
    }
  }

  handleChange(data: any) {
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
    return (
      <div is="wrap">
        <div is="picker">
          <Sketch {...this.props} {...this.state} onChange={ this.handleChange } onAccept={ this.handleAccept } onCancel={ this.handleCancel } />
        </div>
        <div is="cover" onClick={ this.handleHide }/>
      </div>
    )
  }
}

ColorPicker.defaultProps = {
  color: {
    h: 250,
    s: .50,
    l: .20,
    a: 1,
  },
  display: null,
  type: 'sketch',
  position: 'right',
  positionCSS: {},
}

export default ColorPicker
