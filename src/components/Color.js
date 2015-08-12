'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var Photoshop = require('./photoshop/Photoshop');
var Sketch = require('./sketch/Sketch');
var Chrome = require('./chrome/Chrome');
var Swatches = require('./swatches/Swatches');
var Slider = require('./slider/Slider');
var Material = require('./material/Material');

class ColorPicker extends ReactCSS.Component {

  constructor(props) {
    super();

    this.state = {
      // h: props.h,
      // s: props.s,
      // l: props.l,
      // a: props.a,
      h: 174,
      s: 100,
      l: 29,
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
    if (this.props.onChange) {
      this.props.onChange(this.state);
    } else {
      this.setState(data);
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.h) {
  //     this.setState({
  //       h: nextProps.h,
  //       s: nextProps.s,
  //       l: nextProps.l,
  //       a: nextProps.a,
  //     });
  //   }
  // }

  render() {
    var picker = <Sketch {...this.state} onChange={ this.handleChange } />;

    if (this.props.type === 'sketch') {
      picker = <Sketch {...this.state} onChange={ this.handleChange } presetColors={ ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'] } />;
    } else if (this.props.type === 'photoshop') {
      picker = <Photoshop {...this.state} onChange={ this.handleChange } />;
    } else if (this.props.type === 'chrome') {
      picker = <Chrome {...this.state} onChange={ this.handleChange } />;
    } else if (this.props.type === 'swatches') {
      picker = <Swatches {...this.state} onChange={ this.handleChange } />;
    } else if (this.props.type === 'slider') {
      picker = <Slider {...this.state} onChange={ this.handleChange } />;
    } else if (this.props.type === 'material') {
      picker = <Material {...this.state} onChange={ this.handleChange } />;
    }

    return picker;
  }

}

// ColorPicker.defaultProps = {
//   h: 174,
//   s: 100,
//   l: 29,
//   a: 100,
// };

module.exports = ColorPicker;
