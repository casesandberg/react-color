'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import SliderSwatch from './SliderSwatch'

export class SliderSwatches extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        swatches: {
          marginTop: '20px',
        },
        swatch: {
          boxSizing: 'border-box',
          width: '20%',
          paddingRight: '1px',
          float: 'left',
        },
        clear: {
          clear: 'both',
        },
      },
    }
  }

  handleClick = (data: any) => {
    this.props.onClick(data)
  }

  render(): any {
    return (
      <div is="swatches">
        <div is="swatch">
          <SliderSwatch {...this.props} offset=".80" active={ Math.round(this.props.hsl.l * 100) / 100 == .80 && Math.round(this.props.hsl.s * 100) / 100 == .50 } onClick={ this.handleClick } first />
        </div>
        <div is="swatch">
          <SliderSwatch {...this.props} offset=".65" active={ Math.round(this.props.hsl.l * 100) / 100 == .65 && Math.round(this.props.hsl.s * 100) / 100 == .50 } onClick={ this.handleClick } />
        </div>
        <div is="swatch">
          <SliderSwatch {...this.props} offset=".50" active={ Math.round(this.props.hsl.l * 100) / 100 == .50 && Math.round(this.props.hsl.s * 100) / 100 == .50 } onClick={ this.handleClick } />
        </div>
        <div is="swatch">
          <SliderSwatch {...this.props} offset=".35" active={ Math.round(this.props.hsl.l * 100) / 100 == .35 && Math.round(this.props.hsl.s * 100) / 100 == .50 } onClick={ this.handleClick } />
        </div>
        <div is="swatch">
          <SliderSwatch {...this.props} offset=".20" active={ Math.round(this.props.hsl.l * 100) / 100 == .20 && Math.round(this.props.hsl.s * 100) / 100 == .50 } onClick={ this.handleClick } last />
        </div>
        <div is="clear" />
      </div>
    )
  }
}

export default SliderSwatches
