import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import { ColorWrap } from '../common'
import GithubSwatch from './GithubSwatch'

export const Github = ({ width, colors, onChange, triangle }) => {
  const styles = reactCSS({
    'default': {
      card: {
        width,
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
      },
      triangleShadow: {
        position: 'absolute',
        border: '8px solid transparent',
        borderBottomColor: 'rgba(0,0,0,0.15)',
      },
    },
    'hide-triangle': {
      triangle: {
        display: 'none',
      },
      triangleShadow: {
        display: 'none',
      },
    },
    'top-left-triangle': {
      triangle: {
        top: '-14px',
        left: '10px',
      },
      triangleShadow: {
        top: '-16px',
        left: '9px',
      },
    },
    'top-right-triangle': {
      triangle: {
        top: '-14px',
        right: '10px',
      },
      triangleShadow: {
        top: '-16px',
        right: '9px',
      },
    },
  }, {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right',
  })

  const handleChange = (hex, e) => onChange({ hex, source: 'hex' }, e)

  return (
    <div style={ styles.card } className="github-picker">
      <div style={ styles.triangleShadow } />
      <div style={ styles.triangle } />
      { map(colors, (c) => (
        <GithubSwatch color={ c } key={ c } onClick={ handleChange } />
      )) }
    </div>
  )
}

Github.defaultProps = {
  width: '200px',
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB',
           '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
  triangle: 'top-left',
}

export default ColorWrap(Github)
