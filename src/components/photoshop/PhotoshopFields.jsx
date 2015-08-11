'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var EditableInput = require('../common/EditableInput');

class PhotoshopPicker extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

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

  handleChange(data) {
    if (data['#']) {
      var color = tinycolor(data['#']);
      if (color.isValid()) {
        var hsl = color.toHsl();
        this.props.onChange({ h: hsl.h, s: hsl.s, l: hsl.l });
      }
    } else if (data.r || data.g || data.b) {
      var oldColor = tinycolor({ h: this.props.h, s: this.props.s, l: this.props.l}).toRgb();
      for (var key in data) {
        oldColor[key] = Number(data[key]);
      }

      var color = tinycolor(oldColor);
      if (color.isValid()) {
        var hsl = color.toHsl();
        this.props.onChange({ h: hsl.h, s: hsl.s, l: hsl.l });
      }
    } else if (data.h || data.s || data.v) {
      var oldColor = tinycolor({ h: this.props.h, s: this.props.s, l: this.props.l}).toHsv();
      for (var key in data) {
        oldColor[key] = Number(data[key]);
      }

      var color = tinycolor(oldColor);
      if (color.isValid()) {
        var hsl = color.toHsl();
        this.props.onChange({ h: hsl.h, s: hsl.s, l: hsl.l });
      }
    }
  }

  render() {
    var hsv = tinycolor(this.props).toHsv();
    var rgb = tinycolor(this.props).toRgb();
    var hex = tinycolor(this.props).toHex();
    return (
      <div is="fields">
        <EditableInput is="Input" label="h" value={ Math.round(hsv.h) } onChange={ this.handleChange }/>
        <EditableInput is="Input" label="s" value={ Math.round(hsv.s * 100) } onChange={ this.handleChange }/>
        <EditableInput is="Input" label="v" value={ Math.round(hsv.v * 100) } onChange={ this.handleChange }/>
        <div is="divider" />
        <EditableInput is="Input" label="r" value={ rgb.r } onChange={ this.handleChange }/>
        <EditableInput is="Input" label="g" value={ rgb.g } onChange={ this.handleChange }/>
        <EditableInput is="Input" label="b" value={ rgb.b } onChange={ this.handleChange }/>
        <div is="divider" />
        <EditableInput is="Hex" label="#" value={ hex } onChange={ this.handleChange }/>
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
