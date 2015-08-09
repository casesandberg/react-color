'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Saturation extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        color: {
          Absolute: '0 0 0 0',
          background: 'rgb(133, 255, 0)',
          overflow: 'hidden',
          borderRadius: this.props.radius,
        },
        white: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))',
        },
        black: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
          boxShadow: this.props.shadow,
        },
      },
    };
  }

  render() {
    return (
      <div is="color">
        <div is="white">
          <div is="black" />
        </div>
      </div>
    );
  }

}

module.exports = Saturation;
