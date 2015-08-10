'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Saturation extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        color: {
          Absolute: '0 0 0 0',
          background: 'hsl(' + this.props.h + ',100%, 50%)',
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
        circle: {
          position: 'absolute',
          top: '5px',
          right: '12px',
          width: '4px',
          height: '4px',
          boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4)',
          borderRadius: '50%',
        },
      },
    };
  }

  render() {
    return (
      <div is="color">
        <div is="white">
          <div is="black" />
          <div is="circle" />
        </div>
      </div>
    );
  }

}

module.exports = Saturation;
