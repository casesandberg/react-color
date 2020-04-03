import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'

import { Swatch } from '../common'
import ChromeSwatch from './ChromeSwatch';

export const ChromePresetColors = ({ hover, colors, onClick = () => {}, onSwatchHover }) => {
  const styles = reactCSS({
    'default': {
      colors: {
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
      },
    },
  }, {
    'no-presets': !colors || !colors.length,
  })

  const handleClick = (hex, e) => {
    onClick({
      hex,
      source: 'hex',
    }, e)
  }

  return (
    <div style={ styles.colors } className="flexbox-fix">
      {colors.map(colorObjOrString => {
        return <ChromeSwatch
          colorObjOrString={ colorObjOrString }
          onClick={ handleClick }
          onHover={ onSwatchHover }
        />}
      )}
    </div>
  )
}

ChromePresetColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      color: PropTypes.string,
      title: PropTypes.string,
    })],
  )).isRequired,
}

export default ChromePresetColors
