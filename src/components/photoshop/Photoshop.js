import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import merge from 'lodash/merge'

import { ColorWrap, Saturation, Hue } from '../common'
import PhotoshopFields from './PhotoshopFields'
import PhotoshopPointerCircle from './PhotoshopPointerCircle'
import PhotoshopPointer from './PhotoshopPointer'
import PhotoshopButton from './PhotoshopButton'
import PhotoshopPreviews from './PhotoshopPreviews'

export class Photoshop extends React.Component {
  constructor(props) {
    super()

    this.state = {
      currentColor: props.hex,
    }
  }

  render() {
    const {
      styles: passedStyles = {},
      className = '',
      hexInputDebounce,
    } = this.props
    const styles = reactCSS(merge({
      'default': {
        picker: {
          background: '#DCDCDC',
          borderRadius: '4px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
          boxSizing: 'initial',
          width: '513px',
        },
        head: {
          backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
          borderBottom: '1px solid #B1B1B1',
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
          height: '23px',
          lineHeight: '24px',
          borderRadius: '4px 4px 0 0',
          fontSize: '13px',
          color: '#4D4D4D',
          textAlign: 'center',
        },
        body: {
          padding: '15px 15px 0',
          display: 'flex',
        },
        saturation: {
          width: '256px',
          height: '256px',
          position: 'relative',
          border: '2px solid #B3B3B3',
          borderBottom: '2px solid #F0F0F0',
          overflow: 'hidden',
        },
        hue: {
          position: 'relative',
          height: '256px',
          width: '19px',
          marginLeft: '10px',
          border: '2px solid #B3B3B3',
          borderBottom: '2px solid #F0F0F0',
        },
        controls: {
          width: '180px',
          marginLeft: '10px',
        },
        top: {
          display: 'flex',
        },
        previews: {
          width: '60px',
        },
        actions: {
          flex: '1',
          marginLeft: '20px',
        },
      },
    }, passedStyles))

    return (
      <div style={ styles.picker } className={ `photoshop-picker ${ className }` }>
        <div style={ styles.head }>{ this.props.header }</div>

        <div style={ styles.body } className="flexbox-fix">
          <div style={ styles.saturation }>
            <Saturation
              hsl={ this.props.hsl }
              hsv={ this.props.hsv }
              pointer={ PhotoshopPointerCircle }
              onChange={ this.props.onChange }
            />
          </div>
          <div style={ styles.hue }>
            <Hue
              direction="vertical"
              hsl={ this.props.hsl }
              pointer={ PhotoshopPointer }
              onChange={ this.props.onChange }
            />
          </div>
          <div style={ styles.controls }>
            <div style={ styles.top } className="flexbox-fix">
              <div style={ styles.previews }>
                <PhotoshopPreviews
                  rgb={ this.props.rgb }
                  currentColor={ this.state.currentColor }
                />
              </div>
              <div style={ styles.actions }>
                <PhotoshopButton label="OK" onClick={ this.props.onAccept } active />
                <PhotoshopButton label="Cancel" onClick={ this.props.onCancel } />
                <PhotoshopFields
                  onChange={ this.props.onChange }
                  rgb={ this.props.rgb }
                  hsv={ this.props.hsv }
                  hex={ this.props.hex }
                  hexInputDebounce={ hexInputDebounce }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Photoshop.propTypes = {
  header: PropTypes.string,
  styles: PropTypes.object,
  hexInputDebounce: PropTypes.number,
}

Photoshop.defaultProps = {
  header: 'Color Picker',
  styles: {},
  hexInputDebounce: 750,
}

export default ColorWrap(Photoshop)
