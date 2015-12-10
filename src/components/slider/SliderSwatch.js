'use strict'; /* @flow */

import React from 'react';
import ReactCSS from 'reactcss';

export class SliderSwatch extends ReactCSS.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  classes(): any {
    return {
      'default': {
        swatch: {
          height: '12px',
          background: 'hsl(' + this.props.hsl.h + ', 50%, ' + (this.props.offset * 100) + '%)',
          cursor: 'pointer',
        },
      },
      'first': {
        swatch: {
          borderRadius: '2px 0 0 2px',
        },
      },
      'last': {
        swatch: {
          borderRadius: '0 2px 2px 0',
        },
      },
      active: {
        swatch: {
          transform: 'scaleY(1.8)',
          borderRadius: '3.6px/2px',
        },
      },
    };
  }

  handleClick() {
    this.props.onClick({ h: this.props.hsl.h, s: .5, l: this.props.offset });
  }

  render(): any {
    return (
      <div is="swatch" ref="swatch" onClick={ this.handleClick } />
    );
  }

}

export default SliderSwatch;
