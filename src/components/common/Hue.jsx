'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Hue extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        hue: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
          overflow: 'hidden',
          borderRadius: this.props.radius,
          boxShadow: this.props.shadow,
        },
      },
    };
  }

  render() {
    return (
      <div is="hue">
      </div>
    );
  }

}

module.exports = Hue;
