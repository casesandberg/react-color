'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var Photoshop = require('./photoshop/Photoshop');
var Sketch = require('./sketch/Sketch');
var Chrome = require('./chrome/Chrome');

class ColorPicker extends ReactCSS.Component {

  constructor(props) {
    super();

    this.state = {
      h: 149,
      s: 23,
      l: 47,
      a: 100,
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
    var picker = <Sketch {...this.state} {...this.props} onChange={ this.handleChange } />;

    if (this.props.type === 'sketch') {
      picker = <Sketch {...this.state} {...this.props} onChange={ this.handleChange } presetColors={ ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'] } />;
    } else if (this.props.type === 'photoshop') {
      picker = <Photoshop {...this.state} {...this.props} onChange={ this.handleChange } />;
    } else if (this.props.type === 'chrome') {
      picker = <Chrome {...this.state} {...this.props} onChange={ this.handleChange } />;
    }

    return picker;
  }

}

module.exports = ColorPicker;
