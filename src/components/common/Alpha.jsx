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
          background: 'linear-gradient(to right, rgba(133, 255, 0, 0) 0%, rgba(133, 255, 0, 1) 100%)',
          boxShadow: this.props.shadow,
          borderRadius: this.props.radius,
        },
      },
    };
  }

  render() {
    return (
      <div is="alhpa">
        <div is="gradient" />
      </div>
    );
  }

}

module.exports = Alpha;
