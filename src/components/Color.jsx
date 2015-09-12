'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var merge = require('merge');
var _ = require('lodash');
var color = require('../helpers/color');

var Photoshop = require('./photoshop/Photoshop');
var Sketch = require('./sketch/Sketch');
var Chrome = require('./chrome/Chrome');
var Swatches = require('./swatches/Swatches');
var Slider = require('./slider/Slider');
var Material = require('./material/Material');
var Compact = require('./compact/Compact');

var defaultColor = {
  h: 250,
  s: .50,
  l: .20,
  a: 1,
};

class ColorPicker extends ReactCSS.Component {

  constructor(props) {
    super();

    this.state = merge(color.toState(props.color), {
      visible: props.display,
      oldHue: props.color.h || defaultColor.h,
    });

    this.debounce = _.debounce(function(fn, data) {
      fn(data);
    }, 100);

    this.handleChange = this.handleChange.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  classes() {
    return {
      'show': {
        wrap: {
          zIndex: '999',
          position: 'absolute',
          display: 'block',
        },
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
          zIndex: '999',
          position: 'absolute',
          display: 'none',
        },
      },
      'right': {
        wrap: {
          left: '100%',
          marginLeft: '20px',
          top: '0',
        },
      },
      'left': {
        wrap: {
          right: '100%',
          marginRight: '20px',
          top: '0',
        },
      },
      'below': {
        wrap: {
          left: '0',
          marginLeft: '0',
          top: '100%',
          marginTop: '20px',
        },
      },
      'override': {
        wrap: this.props.positionCSS,
      },
    };
  }

  styles() {
    return this.css({
      'below': this.props.position === 'below' && this.props.display !== null,
      'right': this.props.position === 'right' && this.props.display !== null,
      'left': this.props.position === 'left' && this.props.display !== null,
      'show': this.state.visible === true,
      'hide': this.state.visible === false,
      'override': _.isPlainObject(this.props.positionCSS),
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

  handleAccept() {
    this.handleHide();
  }

  handleCancel() {
    if (this.state.visible === true) {
      this.setState({
        visible: false,
      });
    }
  }

  handleChange(data) {
    data = color.simpleCheckForValidColor(data);
    if (data) {
      var colors = color.toState(data, data.h || this.state.oldHue);
      this.setState(colors);
      this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors);
      this.props.onChange && this.props.onChange(colors);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(merge(color.toState(nextProps.color, this.state.oldHue), {
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
          <Picker {...this.state} onChange={ this.handleChange } onAccept={ this.handleAccept } onCancel={ this.handleCancel } />
        </div>
        <div is="cover" onClick={ this.handleHide }/>
      </div>
    );
  }
}

ColorPicker.defaultProps = {
  color: defaultColor,
  display: null,
  type: 'sketch',
  position: 'right',
  positionCSS: {},
};

module.exports = ColorPicker;
