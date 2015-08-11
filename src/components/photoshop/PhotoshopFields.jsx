'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

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
    return (
      <div is="fields">
        <EditableInput is="Input" label="h" value={ 32 } />
        <EditableInput is="Input" label="s" value={ 41 } />
        <EditableInput is="Input" label="b" value={ 71 } />
        <div is="divider" />
        <EditableInput is="Input" label="r" value={ 180 } />
        <EditableInput is="Input" label="g" value={ 146 } />
        <EditableInput is="Input" label="b" value={ 107 } />
        <div is="divider" />
        <EditableInput is="Hex" label="#" value={ 'b4926b' } />
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
