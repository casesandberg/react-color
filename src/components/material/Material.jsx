'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var { Raised } = require('react-material-design');
var { EditableInput } = require('../common');

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
        Hex: {
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
              borderBottom: '2px solid #' + this.props.hex,
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
          paddingTop: '11px',
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
      tinycolor(data.hex).isValid() && this.props.onChange(data.hex);
    } else if (data.r || data.g || data.b) {
      this.props.onChange({
        r: data.r || this.props.rgb.r,
        g: data.g || this.props.rgb.g,
        b: data.b || this.props.rgb.b,
      });
    }
  }

  render() {
    return (
      <Raised>
        <div is="material">
          <EditableInput is="Hex" label="hex" value={ '#' + this.props.hex } onChange={ this.handleChange } />
          <div is="split" className="flexbox-fix">
            <div is="third">
              <EditableInput is="Input" label="r" value={ this.props.rgb.r } onChange={ this.handleChange } />
            </div>
            <div is="third">
              <EditableInput is="Input" label="g" value={ this.props.rgb.g } onChange={ this.handleChange } />
            </div>
            <div is="third">
              <EditableInput is="Input" label="b" value={ this.props.rgb.b } onChange={ this.handleChange } />
            </div>
          </div>
        </div>
      </Raised>
    );
  }

}

module.exports = Material;
