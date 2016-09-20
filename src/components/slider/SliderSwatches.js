'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import SliderSwatch from './SliderSwatch'

export class SliderSwatches extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleClick = (data: any) => {
    this.props.onClick(data)
  }

  render(): any {
    const styles = reactCSS({
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
    })

    return (
      <div style={ styles.swatches }>
        <div style={ styles.swatch }>
          <SliderSwatch
            { ...this.props }
            offset=".80"
            active={ Math.round(this.props.hsl.l * 100) / 100 === 0.80
              && Math.round(this.props.hsl.s * 100) / 100 === 0.50 }
            onClick={ this.handleClick }
            first
          />
        </div>
        <div style={ styles.swatch }>
          <SliderSwatch
            { ...this.props }
            offset=".65"
            active={ Math.round(this.props.hsl.l * 100) / 100 === 0.65
              && Math.round(this.props.hsl.s * 100) / 100 === 0.50 }
            onClick={ this.handleClick }
          />
        </div>
        <div style={ styles.swatch }>
          <SliderSwatch
            { ...this.props }
            offset=".50"
            active={ Math.round(this.props.hsl.l * 100) / 100 === 0.50
               && Math.round(this.props.hsl.s * 100) / 100 === 0.50 }
            onClick={ this.handleClick }
          />
        </div>
        <div style={ styles.swatch }>
          <SliderSwatch
            { ...this.props }
            offset=".35"
            active={ Math.round(this.props.hsl.l * 100) / 100 === 0.35
              && Math.round(this.props.hsl.s * 100) / 100 === 0.50 }
            onClick={ this.handleClick }
          />
        </div>
        <div style={ styles.swatch }>
          <SliderSwatch
            { ...this.props }
            offset=".20"
            active={ Math.round(this.props.hsl.l * 100) / 100 === 0.20
              && Math.round(this.props.hsl.s * 100) / 100 === 0.50 }
            onClick={ this.handleClick }
            last
          />
        </div>
        <div style={ styles.clear } />
      </div>
    )
  }
}

export default SliderSwatches
