'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import shallowCompare from 'react-addons-shallow-compare'

import { ColorWrap } from '../common'
import GithubSwatch from './GithubSwatch'

export class Github extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleChange = (hex) => {
    this.props.onChange({ hex, source: 'hex' })
  }

  render(): any {
    const styles = reactCSS({
      'default': {
        card: {
          width: this.props.width,
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.2)',
          boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
          borderRadius: '4px',
          position: 'relative',
          padding: '5px',
          display: 'flex',
          flexWrap: 'wrap',
        },
        triangle: {
          position: 'absolute',
          border: '7px solid transparent',
          borderBottomColor: '#fff',
          top: '-14px',
          left: '10px',
        },
        triangleShadow: {
          position: 'absolute',
          border: '8px solid transparent',
          borderBottomColor: 'rgba(0,0,0,0.15)',
          top: '-16px',
          left: '9px',
        },
      },
    })

    return (
      <div style={ styles.card }>
        <div style={ styles.triangleShadow } />
        <div style={ styles.triangle } />
        { map(this.props.colors, (c) => {
          return (
            <GithubSwatch color={ c } key={ c } onClick={ this.handleChange } />
          )
        }) }
      </div>
    )
  }
}

Github.defaultProps = {
  width: '200px',
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB',
           '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
}

export default ColorWrap(Github)
