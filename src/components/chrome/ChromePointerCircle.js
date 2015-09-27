'use strict'; /* @flow */

var React = require('react');
var ReactCSS = require('reactcss');

class ChromePointerCircle extends ReactCSS.Component {

  classes(): any {
    return {
      'default': {
        picker: {
          width: '12px',
          height: '12px',
          borderRadius: '6px',
          boxShadow: 'inset 0 0 0 1px #fff',
          transform: 'translate(-6px, -6px)',
        },
      },
    };
  }

  render(): any {
    return (
      <div is="picker"></div>
    );
  }

}

module.exports = ChromePointerCircle;
