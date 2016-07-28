'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import { ColorWrap, Saturation, Hue } from '../common'
import PhotoshopFields from './PhotoshopFields'
import PhotoshopPointerCircle from './PhotoshopPointerCircle'
import PhotoshopPointer from './PhotoshopPointer'
import ClassNames from 'classnames'

export class Photoshop extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1]);

  constructor(props: any) {
    super()

    this.state = {
      currentColor: props.hex,
    }
  }

  classes(): any {
    return {
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
        Hue: {
          direction: 'vertical',
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
        swatches: {
          border: '1px solid #B3B3B3',
          borderBottom: '1px solid #F0F0F0',
          marginBottom: '2px',
          marginTop: '1px',
        },
        new: {
          height: '34px',
          background: 'rgb(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ')',
          boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000',
        },
        current: {
          height: '34px',
          background: '#' + this.state.currentColor,
          boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000',
        },
        label: {
          fontSize: '14px',
          color: '#000',
          textAlign: 'center',
        },
        actions: {
          flex: '1',
          marginLeft: '20px',
        },
        button: {
          backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
          border: '1px solid #878787',
          borderRadius: '2px',
          height: '20px',
          boxShadow: '0 1px 0 0 #EAEAEA',
          fontSize: '14px',
          color: '#000',
          lineHeight: '20px',
          textAlign: 'center',
          marginBottom: '10px',
        },
        acceptButton: {
          Extend: 'button',
          boxShadow: '0 0 0 1px #878787',
        },
      },
    }
  }

  handleChange = (data: any) => {
    this.props.onChange(data)
  }

  handleAccept = () => {
    this.props.onAccept && this.props.onAccept()
  }

  handleCancel = () => {
    this.props.onCancel && this.props.onCancel()
  }

  render(): any {
    var header
    let mainClass = ClassNames({ [`${this.props.addClassName}`]: Boolean(this.props.addClassName) });
    let headerClass = ClassNames({ [`${this.props.addClassName}-header`]: Boolean(this.props.addClassName) });
    let bodyClass = ClassNames({
      [`${this.props.addClassName}-body`]: Boolean(this.props.addClassName),
      'flexbox-fix': true
    });
    if (this.props.header) {
      header = <div className={headerClass} is="head">
        { this.props.header }
      </div>
    }
    return (
        <div className={mainClass} is="picker">
          { header }
          <div is="body" className={bodyClass}>
            <div is="saturation">
              <Saturation is="Saturation" {...this.props} pointer={ PhotoshopPointerCircle } onChange={ this.handleChange }/>
            </div>
            <div is="hue">
              <Hue is="Hue" {...this.props} pointer={ PhotoshopPointer } onChange={ this.handleChange } />
            </div>
            <div is="controls">
              <div is="top" className="flexbox-fix">
                <div is="previews">
                  <div is="label">new</div>
                  <div is="swatches">
                    <div is="new" />
                    <div is="current" />
                  </div>
                  <div is="label">current</div>
                </div>
                <div is="actions">
                  <div is="acceptButton" ref="accept" onClick={ this.handleAccept }>OK</div>
                  <div is="button" ref="cancel" onClick={ this.handleCancel }>Cancel</div>

                  <PhotoshopFields {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

Photoshop.defaultProps = {
  header: 'Color Picker',
}

export default ColorWrap(Photoshop)
