'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var EditableInput = require('../common/EditableInput');

class PhotoshopPicker extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        fields: {
          paddingTop: '5px',
          paddingBottom: '9px',
          width: '80px',
          position: 'relative',
        },
        divider: {
          height: '5px',
        },
        Input: {
          style: {
            wrap: {
              display: 'flex',
            },
            input: {
              flex: '1',
              order: '2',
              height: '18px',
              border: '1px solid #888888',
              boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
              marginBottom: '5px',
              fontSize: '13px',
              paddingLeft: '3px',
              marginRight: '10px',
            },
            label: {
              width: '34px',
              order: '1',
              textTransform: 'uppercase',
              fontSize: '13px',
              height: '18px',
              lineHeight: '22px',
            },
          },
        },
        Hex: {
          style: {
            wrap: {
              display: 'flex',
            },
            input: {
              flex: '1',
              order: '2',
              height: '18px',
              border: '1px solid #888888',
              boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
              marginBottom: '6px',
              fontSize: '13px',
              paddingLeft: '3px',
            },
            label: {
              width: '14px',
              order: '1',
              textTransform: 'uppercase',
              fontSize: '13px',
              height: '18px',
              lineHeight: '22px',
            },
          },
        },
        fieldSymbols: {
          position: 'absolute',
          top: '5px',
          right: '-7px',
          fontSize: '13px',
        },
        symbol: {
          height: '20px',
          lineHeight: '22px',
          paddingBottom: '7px',
        },
      },
    };
  }

  render() {
    var hsv = tinycolor(this.props).toHsv();
    var rgb = tinycolor(this.props).toRgb();
    var hex = tinycolor(this.props).toHex();
    return (
      <div is="fields">
        <EditableInput is="Input" label="h" value={ hsv.h } />
        <EditableInput is="Input" label="s" value={ Math.round(hsv.s * 100) } />
        <EditableInput is="Input" label="b" value={ Math.round(hsv.v * 100) } />
        <div is="divider" />
        <EditableInput is="Input" label="r" value={ rgb.r } />
        <EditableInput is="Input" label="g" value={ rgb.g } />
        <EditableInput is="Input" label="b" value={ rgb.b } />
        <div is="divider" />
        <EditableInput is="Hex" label="#" value={ hex } />
        <div is="fieldSymbols">
          <div is="symbol">°</div>
          <div is="symbol">%</div>
          <div is="symbol">%</div>
        </div>
      </div>
    );
  }

}

module.exports = PhotoshopPicker;
