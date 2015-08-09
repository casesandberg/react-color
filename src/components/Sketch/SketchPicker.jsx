'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class ColorPicker extends ReactCSS.Component {

  classes() {
    return {
      'default': {

      },
    };
  }

  render() {
    return (
      <div>Sketch Picker</div>
    );
  }

}

module.exports = ColorPicker;
