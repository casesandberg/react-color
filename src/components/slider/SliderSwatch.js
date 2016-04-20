'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class SliderSwatch extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        swatch: {
          height: '12px',
          background: 'hsl(' + this.props.hsl.h + ', 50%, ' + (this.props.offset * 100) + '%)',
          cursor: 'pointer',
        },
      },
      'first': {
        swatch: {
          borderRadius: '2px 0px 0px 2px',
        },
      },
      'last': {
        swatch: {
          borderRadius: '0px 2px 2px 0px',
        },
      },
      active: {
        swatch: {
          transform: 'scaleY(1.8)',
          borderRadius: '3.6px/2px',
        },
      },
    }
  }

  handleClick = () => {
    this.props.onClick({
      h: this.props.hsl.h,
      s: .5,
      l: this.props.offset,
      source: 'hsl',
    })
  }

  render(): any {
    return (
      <div is="swatch" ref="swatch" onClick={ this.handleClick } />
    )
  }

}

export default SliderSwatch
