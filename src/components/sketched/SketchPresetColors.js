'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class SketchPresetColors extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        colors: {
          marginRight: '-10px',
          marginLeft: '-10px',
          paddingLeft: '10px',
          paddingTop: '10px',
          borderTop: '1px solid #eee',
        },
        li: {
          borderRadius: '3px',
          overflow: 'hidden',
          position: 'relative',
          display: 'inline-block',
          margin: '0px 10px 10px 0px',
          verticalAlign: 'top',
          cursor: 'pointer',
        },
        square: {
          borderRadius: '3px',
          width: '16px',
          height: '16px',
          boxShadow: 'inset 0px 0px 0px 1px rgba(0,0,0,.15)',
        },
      },
      'no-presets': {
        colors: {
          display: 'none',
        },
      },
    }
  }

  styles(): any {
    return this.css({
      'no-presets': !this.props.colors || !this.props.colors.length,
    })
  }

  handleClick = (hex: any) => {
    this.props.onClick({
      hex: hex,
      source: 'hex',
    })
  }

  render(): any {
    var colors = []
    if (this.props.colors) {
      for (var i = 0; i < this.props.colors.length; i++) {
        var color = this.props.colors[i]
        colors.push(<div key={ color } is="li" ref={ color } onClick={ this.handleClick.bind(null, color) }><div style={{ background: color }} > <div is="square" /> </div></div>)
      }
    }

    return (
      <div is="colors">
        { colors }
      </div>
    )
  }
}

export default SketchPresetColors
