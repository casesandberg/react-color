'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var context = require('react-context');

class Grid extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        grid: {
          position: 'relative',
        },
        left: {
          position: 'absolute',
          width: '130px',
        },
        main: {
          paddingLeft: '150px',
        },
      },
    };
  }

  render() {
    return (
      <div is="grid">
        <div is="left">{ this.props.children[0] }</div>
        <div is="main">{ this.props.children[1] }</div>
      </div>
    );
  }
}

module.exports = Grid;
