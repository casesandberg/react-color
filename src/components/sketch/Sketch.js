import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'

import { ColorWrap, Saturation, Hue, Alpha, Checkboard } from '../common'
import SketchFields from './SketchFields'
import SketchPresetColors from './SketchPresetColors'

const dropperIcon =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAAAXNSR0IArs4c6QAAArpJREFUSA21ljtvE0EQgHN+Nq7dINGA3GFoqCJB7AgowAQq4gdJHFBEgX+DLZrQUNBAHoXjN0iARAE/gCYSiArzMlAkSKBElrAFiIf84BvLi47Yse+cY6Xz7O3szLczs7tnbcziFo1GD7VarUXc+jVNqyCvFYvFJ4LR5MeqBuhCu93O8Th1Pn8DPQ/wsWWwSCRyEcAaIJsO1OkC++zz+fZbAiOiGJBMP5ACOxyOow71YlZKbXB+CrufyJuDQOKbOv4aCRYOh0MY38OHSxwNa6TxaaFQeNGT32GGsVjsIHPMgLZtNltU/JqGNZvNfdgZjWjb6XQG8/n8e4HZ5cdMK5fLG36//wA2h4fYbblcrslMJvNSzTMdGRtjHuNp6rCunPSRW+y+gB4kc0zBBMSuW8JuhnNzDOD9PqAxxr/ncrnXO3WGYezAuIAo9iy3wZ1UKtUAKBE+2OmUeT94es6wIZiAcLrMM0exS8p5Mpls0v/C+Fc1Rn/T7XafQbbVmJJDN4gCYRAnoqIylJWT1hXkFNEeZ/xtFxohhRtqnl72hKpXct/N8b6Ck3kOZV7pBIROIp2y2+2TOC8r3SC5axoFhNPVQSA5Q0ZBsoi+kelBZC6nVttN3VI3dUGifaV0RmQPTAe6BCirnOhAZxkLlEqlN0pnVP6TRgo+i9NVCn65HwinIWo0MQpIFvQ3Mi7YE9zkjxhbALQmSmkSEbrb6ELUKJDNZuVTP1LrRMYBdeEsw2ZY3AUk52ZiLyBZXQdWqVSm6Xu8Xu91tWQVEfK0pI5FvFO6UaVGVDZgz3H6jFosiKNEIuGuVqvLdIPc3HKhfhgVoLeTwynn6Rb1OOLxeD7V6/U4Kb1K2r5x7ZxLp9Mf9QZ76Usax3nWG43GyVqttgloBtANIhq3EiSLlP8g8sm4S3RXgMRJ5UNR/I/2B9GhU3hdmrYOAAAAAElFTkSuQmCC';

export const Sketch = ({ width, rgb, hex, hsv, hsl, dropper = false, onChange, onSwatchHover, onDrop,
  disableAlpha, presetColors, renderers, className = '' }) => {
  const styles = reactCSS({
    'default': {
      picker: {
        width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)',
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden',
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
      },
      controls: {
        display: 'flex',
      },
      dropper: {
        background: `url(${ dropperIcon }) no-repeat center center`,
        backgroundSize: '14px',
        border: '1px solid #d9d9d9',
        borderRadius: '2px',
        cursor: 'pointer',
        position: 'relative',
        padding: '4px',
        marginTop: '4px',
        marginRight: '4px',
        width: '14px',
        height: '14px',
        zIndex: '1px',
      },
      sliders: {
        padding: '4px 0',
        flex: '1',
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px',
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: `rgba(${ rgb.r },${ rgb.g },${ rgb.b },${ rgb.a })`,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden',
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
      },

      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden',
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
      },
    },
    'disableAlpha': {
      color: {
        height: '10px',
      },
      hue: {
        height: '10px',
      },
      alpha: {
        display: 'none',
      },
    },
  }, { disableAlpha })

  return (
    <div style={ styles.picker } className={ `sketch-picker ${ className }` }>
      <div style={ styles.saturation }>
        <Saturation
          style={ styles.Saturation }
          hsl={ hsl }
          hsv={ hsv }
          onChange={ onChange }
        />
      </div>
      <div style={ styles.controls } className="flexbox-fix">
        {
          dropper && <div style={ styles.dropper } onClick={ onDrop } />
        }
        <div style={ styles.sliders }>
          <div style={ styles.hue }>
            <Hue
              style={ styles.Hue }
              hsl={ hsl }
              onChange={ onChange }
            />
          </div>
          <div style={ styles.alpha }>
            <Alpha
              style={ styles.Alpha }
              rgb={ rgb }
              hsl={ hsl }
              renderers={ renderers }
              onChange={ onChange }
            />
          </div>
        </div>
        <div style={ styles.color }>
          <Checkboard />
          <div style={ styles.activeColor } />
        </div>
      </div>

      <SketchFields
        rgb={ rgb }
        hsl={ hsl }
        hex={ hex }
        onChange={ onChange }
        disableAlpha={ disableAlpha }
      />
      <SketchPresetColors
        colors={ presetColors }
        onClick={ onChange }
        onSwatchHover={ onSwatchHover }
      />
    </div>
  )
}

Sketch.propTypes = {
  disableAlpha: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505',
    '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000',
    '#4A4A4A', '#9B9B9B', '#FFFFFF'],
}

export default ColorWrap(Sketch)
