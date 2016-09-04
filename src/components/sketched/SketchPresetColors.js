'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import shallowCompare from 'react-addons-shallow-compare'

import { Swatch } from '../common'

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
          margin: '0 -10px',
          padding: '10px 0 0 10px',
          borderTop: '1px solid #eee',
          display: 'flex',
          flexWrap: 'wrap',
        },
        swatchWrap: {
          width: '16px',
          height: '16px',
          margin: '0 10px 10px 0',
        },
        swatch: {
          borderRadius: '3px',
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
            <div style={ styles.swatchWrap }>
              <Swatch
                key={ c }
                color={ c }
                style={ styles.swatch }
                onClick={ this.handleClick }
              />
            </div>
          )
        }) }
      </div>
    )
  }
}

export default SketchPresetColors
