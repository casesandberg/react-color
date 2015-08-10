'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Alpha extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        alpha: {
          Absolute: '0 0 0 0',
          background: '#eee',
          overflow: 'hidden',
          borderRadius: this.props.radius,
        },
        gradient: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to right, rgba(' + this.props.rgb.join(',') + ', 0) 0%, rgba(' + this.props.rgb.join(',') + ', 1) 100%)',
          boxShadow: this.props.shadow,
          borderRadius: this.props.radius,
        },
        slider: {
          width: '4px',
          borderRadius: '1px',
          height: '8px',
          boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
          background: '#fff',
          zIndex: '2',
          position: 'absolute',
          left: this.props.value + '%',
          top: '1px',
        },
      },
    };
  }

  render() {
    return (
      <div is="alhpa">
        <div is="gradient" />
        <div is="slider" />
      </div>
    );
  }

}

module.exports = Alpha;
