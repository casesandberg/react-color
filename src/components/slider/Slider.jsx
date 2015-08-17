'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var { Hue } = require('../common');
var SliderSwatches = require('./SliderSwatches');
var SliderPointer = require('./SliderPointer');

class Swatches extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        slider: {
        },
        hue: {
          height: '12px',
          position: 'relative',
        },
        Hue: {
          radius: '2px',
        },
      },
    };
  }

  handleChange(data) {
    this.props.onChange(data);
  }

  render() {
    return (
      <div is="slider">
        <div is="hue">
          <Hue is="Hue" {...this.props} pointer={ SliderPointer } onChange={ this.handleChange } />
        </div>
        <div is="swatches">
          <SliderSwatches {...this.props} onClick={ this.handleChange }/>
        </div>
      </div>
    );
  }

}

module.exports = Swatches;
