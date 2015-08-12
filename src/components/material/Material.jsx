'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var { Raised } = require('react-material-design');
var EditableInput = require('../common/EditableInput');

class Material extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        material: {
          width: '98px',
          height: '98px',
          padding: '16px',
          fontFamily: 'Roboto',
        },
        Input: {
          style: {
            wrap: {
              position: 'relative',
            },
            input: {
              width: '100%',
              marginTop: '12px',
              fontSize: '15px',
              color: '#333',
              padding: '0',
              border: '0',
              borderBottom: '1px solid #eee',
              outline: 'none',
              height: '30px',
            },
            label: {
              position: 'absolute',
              top: '0',
              left: '0',
              fontSize: '11px',
              color: '#999999',
              textTransform: 'capitalize',
            },
          },
        },
        split: {
          display: 'flex',
          marginRight: '-10px',
          paddingTop: '12px',
        },
        third: {
          flex: '1',
          paddingRight: '10px',
        },
      },
    };
  }

  handleChange(data) {
    if (data.hex) {
      var color = tinycolor(data.hex);
      if (color.isValid()) {
        var hsl = color.toHsl();
        this.props.onChange({ h: hsl.h, s: hsl.s, l: hsl.l });
      }
    } else if (data.r || data.g || data.b) {
      var oldColor = tinycolor({ h: this.props.h, s: this.props.s, l: this.props.l}).toRgb();
      for (var key in data) {
        oldColor[key] = Number(data[key]);
      }

      var hsl = tinycolor(oldColor).toHsl();
      this.props.onChange({ h: hsl.h, s: hsl.s, l: hsl.l });
    }
  }

  render() {
    var rgb = tinycolor(this.props).toRgb();
    var hex = tinycolor(this.props).toHex();

    return (
      <Raised>
        <div is="material">
          <EditableInput is="Input" label="hex" value={ '#' + hex } onChange={ this.handleChange } />
          <div is="split">
            <div is="third">
              <EditableInput is="Input" label="r" value={ rgb.r } onChange={ this.handleChange } />
            </div>
            <div is="third">
              <EditableInput is="Input" label="g" value={ rgb.g } onChange={ this.handleChange } />
            </div>
            <div is="third">
              <EditableInput is="Input" label="b" value={ rgb.b } onChange={ this.handleChange } />
            </div>
          </div>
        </div>
      </Raised>
    );
  }

}

module.exports = Material;
