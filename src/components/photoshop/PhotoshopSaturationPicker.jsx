'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class PhotoshopPicker extends ReactCSS.Component {

  classes() {
    return {
      'default': {
      },
    };
  }

  render() {
    return (
      <div is="picker"></div>
    );
  }

}

module.exports = PhotoshopPicker;
