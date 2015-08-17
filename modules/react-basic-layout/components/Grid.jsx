'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Grid extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        grid: {
          position: 'relative',
        },
      },
      'preset-default': {
        left: {
          position: 'absolute',
          width: '170px',
        },
        main: {
          paddingLeft: '190px',
        },
      },
      'preset-one': {
        left: {
          width: 'auto',
          position: 'relative',
          paddingRight: '260px',
        },
        main: {
          position: 'absolute',
          right: '0',
          top: '0',
          width: '225px',
        },
      },
      'preset-two': {
        left: {
          width: '220px',
          position: 'absolute',
        },
        main: {
          paddingLeft: '267px',
        },
      },
      'preset-three': {
        left: {
          width: '410px',
          position: 'absolute',
          height: '100%',
        },
        main: {
          paddingLeft: '455px',
        },
      },

      'mobile-default': {
        main: {
          padding: '0',
        },
        left: {
          display: 'none',
        },
      },
      'mobile-one': {
        left: {
          paddingRight: '0',
        },
        main: {
          display: 'none',
        },
      },
      'mobile-two': {
        grid: {
          position: 'relative',
          width: '100%',
        },
        left: {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          marginLeft: '-20px',
        },
        main: {
          display: 'none',
        },
      },
      'mobile-three': {
        grid: {
          display: 'none',
        },
      },
    };
  }

  styles() {
    return this.css({
      'mobile-default': this.props.preset === 'default' && document.getElementById('root').clientWidth < 500,
      'mobile-one': this.props.preset === 'one' && document.getElementById('root').clientWidth < 500,
      'mobile-two': this.props.preset === 'two' && document.getElementById('root').clientWidth < 500,
      'mobile-three': this.props.preset === 'three' && document.getElementById('root').clientWidth < 500,
    });
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

Grid.defaultProps = {
  preset: 'default',
};

module.exports = Grid;
