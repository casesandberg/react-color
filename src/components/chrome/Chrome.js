import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import merge from 'lodash/merge'

import { ColorWrap, Saturation, Hue, Alpha, Checkboard } from '../common'
import ChromeFields from './ChromeFields'
import ChromePointer from './ChromePointer'
import ChromePointerCircle from './ChromePointerCircle'

export const Chrome = ({ width, onChange, disableAlpha, rgb, hsl, hsv, hex, renderers,
  styles: passedStyles = {}, className = '', defaultView }) => {
  const styles = reactCSS(merge({
    'default': {
      picker: {
        width,
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        fontFamily: 'Menlo',
      },
      saturation: {
        width: '100%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden',
      },
      Saturation: {
        radius: '2px 2px 0 0',
      },
      body: {
        padding: '16px 16px 12px',
      },
      controls: {
        display: 'flex',
      },
      color: {
        width: '32px',
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: `rgba(${ rgb.r }, ${ rgb.g }, ${ rgb.b }, ${ rgb.a })`,
        zIndex: '2',
      },
      toggles: {
        flex: '1',
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px',
      },
      Hue: {
        radius: '2px',
      },
      alpha: {
        height: '10px',
        position: 'relative',
      },
      Alpha: {
        radius: '2px',
      },
    },
    'disableAlpha': {
      color: {
        width: '22px',
      },
      alpha: {
        display: 'none',
      },
      hue: {
        marginBottom: '0px',
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px',
      },
    },
  }, passedStyles), { disableAlpha })

  return (
    <div style={ styles.picker } className={ `chrome-picker ${ className }` }>
      <div style={ styles.saturation }>
        <Saturation
          style={ styles.Saturation }
          hsl={ hsl }
          hsv={ hsv }
          pointer={ ChromePointerCircle }
          onChange={ onChange }
        />
      </div>
      <div style={ styles.body }>
        <div style={ styles.controls } className="flexbox-fix">
          <div style={ styles.color }>
            <div style={ styles.swatch }>
              <div style={ styles.active } />
              <Checkboard renderers={ renderers } />
            </div>
          </div>
          <div style={ styles.toggles }>
            <div style={ styles.hue }>
              <Hue
                style={ styles.Hue }
                hsl={ hsl }
                pointer={ ChromePointer }
                onChange={ onChange }
              />
            </div>
            <div style={ styles.alpha }>
              <Alpha
                style={ styles.Alpha }
                rgb={ rgb }
                hsl={ hsl }
                pointer={ ChromePointer }
                renderers={ renderers }
                onChange={ onChange }
              />
            </div>
          </div>
        </div>
        <ChromeFields
          rgb={ rgb }
          hsl={ hsl }
          hex={ hex }
          view={ defaultView }
          onChange={ onChange }
          disableAlpha={ disableAlpha }
        />
      </div>
    </div>
  )
}

Chrome.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableAlpha: PropTypes.bool,
  styles: PropTypes.object,
  defaultView: PropTypes.oneOf([
    "hex",
    "rgb",
    "hsl",
  ]),
}

Chrome.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {},
}

export default ColorWrap(Chrome)
