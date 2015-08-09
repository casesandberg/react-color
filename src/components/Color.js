'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var SketchPicker = require('./Sketch/SketchPicker');

class ColorPicker extends ReactCSS.Component {

  classes() {
    return {
      'default': {

      },
    };
  }

  render() {
    return (
      <SketchPicker />
    );
  }

}

module.exports = ColorPicker;
