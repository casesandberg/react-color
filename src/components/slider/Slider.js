import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import merge from 'lodash/merge'

import { ColorWrap, Hue } from '../common'
import SliderSwatches from './SliderSwatches'
import SliderPointer from './SliderPointer'

export const Slider = ({ hsl, onChange, pointer,
  styles: passedStyles = {}, className = '' }) => {
  const styles = reactCSS(merge({
    'default': {
      hue: {
        height: '12px',
        position: 'relative',
      },
      Hue: {
        radius: '2px',
      },
    },
  }, passedStyles))

  return (
    <div style={ styles.wrap || '' } className={ `slider-picker ${ className }` }>
      <div style={ styles.hue }>
        <Hue
          style={ styles.Hue }
          hsl={ hsl }
          pointer={ pointer }
          onChange={ onChange }
        />
      </div>
      <div style={ styles.swatches }>
        <SliderSwatches hsl={ hsl } onClick={ onChange } />
      </div>
    </div>
  )
}

Slider.propTypes = {
  styles: PropTypes.object,
}
Slider.defaultProps = {
  pointer: SliderPointer,
  styles: {},
}

export default ColorWrap(Slider)
