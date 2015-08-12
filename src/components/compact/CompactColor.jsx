'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class CompactColor extends ReactCSS.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  classes() {
    return {
      'default': {
        color: {
          background: this.props.color,
          width: '15px',
          height: '15px',
          float: 'left',
          marginRight: '5px',
          marginBottom: '5px',
          position: 'relative',
        },
        dot: {
          Absolute: '5px 5px 5px 5px',
          background: '#fff',
          borderRadius: '50%',
          opacity: '0',
        },
      },
      'active': {
        dot: {
          opacity: '1',
        },
      },
      'color-#FFFFFF': {
        dot: {
          background: '#000',
        },
      },
    };
  }

  handleClick() {
    this.props.onClick({ hex: this.props.color });
  }

  render() {
    return (
      <div is="color" onClick={ this.handleClick }>
        <div is="dot" />
      </div>
    );
  }
}

module.exports = CompactColor;
