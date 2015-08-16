'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');
var merge = require('merge');
var _ = require('lodash');

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

    this.state = merge(toColors(props.color), {
      visible: props.display,
    });

    this.debounce = _.debounce(function(fn, data) {
      fn(data);
    }, 100);

    this.handleChange = this.handleChange.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  classes() {
    var wrap;
    if (this.props.position) {
      wrap = this.props.position;
    } else {
      wrap = {
        position: 'absolute',
        display: 'block',
        left: '100%',
        marginLeft: '20px',
        top: '0',
        zIndex: '999',
      };
    }

    return {
      'show': {
        wrap: wrap,
        picker: {
          zIndex: '2',
          position: 'relative',
        },
        cover: {
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
        },
      },
      'hide': {
        wrap: {
          position: 'absolute',
          display: 'none',
        },
      },
    };
  }

  styles() {
    return this.css({
      'show': this.state.visible === true,
      'hide': this.state.visible === false,
    });
  }

  handleHide() {
    if (this.state.visible === true) {
      this.setState({
        visible: false,
      });
      this.props.onClose && this.props.onClose({
        hex: this.state.hex,
        hsl: this.state.hsl,
        rgb: this.state.rgb,
      });
    }
  }

  handleChange(data) {
    var colors = toColors(data);
    this.setState(colors);
    this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors);
    this.props.onChange && this.props.onChange(colors);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(merge(toColors(nextProps.color), {
      visible: nextProps.display,
    }));
  }

  render() {
    var Picker;
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

    return (
      <div is="wrap">
        <div is="picker">
          <Picker {...this.state} onChange={ this.handleChange } />
        </div>
        <div is="cover" onClick={ this.handleHide }/>
      </div>
    );
  }
}

ColorPicker.defaultProps = {
  color: {
    h: 250,
    s: .50,
    l: .20,
    a: 1,
  },
  type: 'sketch',
};

module.exports = ColorPicker;
