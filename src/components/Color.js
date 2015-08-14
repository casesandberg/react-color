'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');
var merge = require('merge');

var Photoshop = require('./photoshop/Photoshop');
var Sketch = require('./sketch/Sketch');
var Chrome = require('./chrome/Chrome');
var Swatches = require('./swatches/Swatches');
var Slider = require('./slider/Slider');
var Material = require('./material/Material');
var Compact = require('./compact/Compact');

var toColors = function(data) {
  var color = tinycolor(data);
  return {
    hsl: color.toHsl(),
    hex: color.toHex(),
    rgb: color.toRgb(),
    hsv: color.toHsv(),
  };
};

class ColorPicker extends ReactCSS.Component {

  constructor(props) {
    super();

    this.state = toColors(props.color);

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {

      },
    };
  }

  handleChange(data) {
    var colors = toColors(data);
    this.setState(colors);
    this.props.onChange && this.props.onChange(colors);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(toColors(nextProps.color));
  }

  render() {
    var Picker = Sketch;

    if (this.props.type === 'sketch') {
      Picker = Sketch;
    } else if (this.props.type === 'photoshop') {
      Picker = Photoshop;
    } else if (this.props.type === 'chrome') {
      Picker = Chrome;
    } else if (this.props.type === 'swatches') {
      Picker = Swatches;
    } else if (this.props.type === 'slider') {
      Picker = Slider;
    } else if (this.props.type === 'material') {
      Picker = Material;
    } else if (this.props.type === 'compact') {
      Picker = Compact;
    }

    return <Picker {...this.state} onChange={ this.handleChange } />;
  }
}

ColorPicker.defaultProps = {
  color: {
    h: 250,
    s: .50,
    l: .20,
    a: 1,
  },
};

module.exports = ColorPicker;
