'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var SketchPicker = require('./Sketch/SketchPicker');

class ColorPicker extends ReactCSS.Component {

  constructor() {
    super();

    this.state = {
      h: 272,
      s: 99,
      l: 54,
      a: 50,
      rgb: [144, 19, 254],
      hex: '9013FE',
    };
  }

  classes() {
    return {
      'default': {

      },
    };
  }

  render() {
    return (
      <SketchPicker {...this.state} />
    );
  }

}

module.exports = ColorPicker;
