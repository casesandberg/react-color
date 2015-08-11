'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var Photoshop = require('./photoshop/Photoshop');
var Sketch = require('./sketch/Sketch');

class ColorPicker extends ReactCSS.Component {

  constructor() {
    super();

    this.state = {
      h: 272,
      s: 99,
      l: 54,
      a: 32,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {

      },
    };
  }

  handleChange(data) {
    this.setState(data);
  }

  render() {
    return (
      <Sketch {...this.state} {...this.props} onChange={ this.handleChange } />
    );
  }

}

module.exports = ColorPicker;
