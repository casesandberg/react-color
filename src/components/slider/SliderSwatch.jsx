'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class SliderSwatch extends ReactCSS.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  classes() {
    return {
      'default': {
        swatch: {
          height: '12px',
          background: 'hsl(' + this.props.h + ', 50%, ' + (this.props.offset * 100) + '%)',
        },
      },
      'first': {
        swatch: {
          borderRadius: '2px 0 0 2px',
        },
      },
      'last': {
        swatch: {
          borderRadius: '0 2px 2px 0',
        },
      },
      active: {
        swatch: {
          transform: 'scaleY(1.8)',
          borderRadius: '3.6px/2px',
        },
      },
    };
  }

  handleClick() {
    this.props.onClick({ h: this.props.h, s: .5, l: this.props.offset });
  }

  render() {
    return (
      <div is="swatch" onClick={ this.handleClick } />
    );
  }

}

module.exports = SliderSwatch;
