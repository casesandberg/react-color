'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var Photoshop = require('./photoshop/Photoshop');
var Sketch = require('./sketch/Sketch');
var Chrome = require('./chrome/Chrome');
var Swatches = require('./swatches/Swatches');
var Slider = require('./slider/Slider');
var Material = require('./material/Material');
var Compact = require('./compact/Compact');

class ColorPicker extends ReactCSS.Component {

  constructor(props) {
    super();

    this.state = {
      // h: props.h,
      // s: props.s,
      // l: props.l,
      // a: props.a,
      h: 150,
      s: 50,
      l: 20,
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

// ColorPicker.defaultProps = {
//   h: 174,
//   s: 100,
//   l: 29,
//   a: 100,
// };

module.exports = ColorPicker;
