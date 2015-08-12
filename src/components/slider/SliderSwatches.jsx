'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var SliderSwatch = require('./SliderSwatch');

class SliderSwatches extends ReactCSS.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  classes() {
    return {
      'default': {
        swatches: {
          marginRight: '-4px',
          marginTop: '20px',
        },
        swatch: {
          width: '19.65%',
          marginRight: '1px',
          float: 'left',
        },
        clear: {
          clear: 'both',
        },
      },
    };
  }

  handleClick(data) {
    this.props.onClick(data);
  }

  render() {
    return (
      <div is="swatches">
        <div is="swatch">
          <SliderSwatch {...this.props} offset="80" active={ this.props.l == 80 && this.props.s == 50 } onClick={ this.handleClick } first />
        </div>
        <div is="swatch">
          <SliderSwatch {...this.props} offset="65" active={ this.props.l == 65 && this.props.s == 50 } onClick={ this.handleClick } />
        </div>
        <div is="swatch">
          <SliderSwatch {...this.props} offset="50" active={ this.props.l == 50 && this.props.s == 50 } onClick={ this.handleClick } />
        </div>
        <div is="swatch">
          <SliderSwatch {...this.props} offset="35" active={ this.props.l == 35 && this.props.s == 50 } onClick={ this.handleClick } />
        </div>
        <div is="swatch">
          <SliderSwatch {...this.props} offset="20" active={ this.props.l == 20 && this.props.s == 50 } onClick={ this.handleClick } last />
        </div>
        <div is="clear" />
      </div>
    );
  }

}

module.exports = SliderSwatches;
