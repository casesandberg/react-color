'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

class SketchPresetColors extends ReactCSS.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  classes() {
    return {
      'default': {
        colors: {
          marginRight: '-10px',
          marginLeft: '-10px',
          paddingLeft: '10px',
          paddingTop: '10px',
          borderTop: '1px solid #eee',
        },
        li: {
          borderRadius: '3px',
          overflow: 'hidden',
          position: 'relative',
          display: 'inline-block',
          margin: '0 10px 10px 0',
          verticalAlign: 'top',
        },
        square: {
          borderRadius: '3px',
          width: '16px',
          height: '16px',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
        },
      },
      'no-presets': {
        colors: {
          display: 'none',
        },
      },
    };
  }

  styles() {
    return this.css({
      'no-presets': !this.props.colors || !this.props.colors.length,
    });
  }

  handleClick(hex) {
    var hsl = tinycolor(hex).toHsl();
    this.props.onClick({ h: hsl.h, s: hsl.s, l: hsl.l, a: 100 });
  }

  render() {
    var colors = [];
    if (this.props.colors) {
      for (var color of this.props.colors) {
        colors.push(<div key={ color } is="li" onClick={ this.handleClick.bind(null, color) }><div style={{ background: color}} > <div is="square" /> </div></div>);
      }
    }

    return (
      <div is="colors">
        { colors }
      </div>
    );
  }
}

module.exports = SketchPresetColors;
