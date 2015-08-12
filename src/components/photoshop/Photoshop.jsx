'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var Saturation = require('../common/Saturation');
var Hue = require('../common/Hue');
var PhotoshopFields = require('./PhotoshopFields');
var PhotoshopPointerCircle = require('./PhotoshopPointerCircle');
var PhotoshopPointer = require('./PhotoshopPointer');

class PhotoshopPicker extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    var rgb = tinycolor(this.props).toRgb();
    return {
      'default': {
        picker: {
          background: '#DCDCDC',
          borderRadius: '4px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
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
          background: 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')',
          boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000',
        },
        current: {
          height: '34px',
          background: 'green',
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
    };
  }

  handleChange(data) {
    this.props.onChange(data);
  }

  render() {
    return (
      <div is="picker">
        <div is="head">
          Color Picker
        </div>
        <div is="body">
          <div is="saturation">
            <Saturation is="Saturation" {...this.props} pointer={ PhotoshopPointerCircle } onChange={ this.handleChange }/>
          </div>
          <div is="hue">
            <Hue is="Hue" value={ this.props.h } pointer={ PhotoshopPointer } onChange={ this.handleChange } />
          </div>
          <div is="controls">
            <div is="top">
              <div is="previews">
                <div is="label">new</div>
                <div is="swatches">
                  <div is="new" />
                  <div is="current" />
                </div>
                <div is="label">current</div>
              </div>
              <div is="actions">
                <div is="acceptButton">OK</div>
                <div is="button">Cancel</div>

                <PhotoshopFields {...this.props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = PhotoshopPicker;
