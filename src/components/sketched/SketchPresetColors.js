'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import shallowCompare from 'react-addons-shallow-compare'

export class SketchPresetColors extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleClick = (hex: any) => {
    this.props.onClick({
      hex,
      source: 'hex',
    })
  }

  render(): any {
    const styles = reactCSS({
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
          margin: '0 10px 10px 0',
          verticalAlign: 'top',
          cursor: 'pointer',
        },
        square: {
          borderRadius: '3px',
          width: '16px',
          height: '16px',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
        },
      },
      'no-presets': {
        colors: {
          display: 'none',
        },
      },
    }, {
      'no-presets': !this.props.colors || !this.props.colors.length,
    })

    return (
      <div style={ styles.colors }>
        { map(this.props.colors, (c) => {
          return (
            <div key={ c } style={ styles.li } ref={ c } onClick={ this.handleClick.bind(null, c) }>
              <div style={{ background: c }} >
                <div style={ styles.square } />
              </div>
            </div>
          )
        }) }
      </div>
    )
  }
}

export default SketchPresetColors
