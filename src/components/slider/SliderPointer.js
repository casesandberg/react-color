'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class SliderPointer extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        picker: {
          width: '14px',
          height: '14px',
          borderRadius: '6px',
          transform: 'translate(-7px, -1px)',
          backgroundColor: 'rgb(248, 248, 248)',
          boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        },
      },
    };
  }

  render() {
    return (
      <div is="picker"></div>
    );
  }

}

module.exports = SliderPointer;
