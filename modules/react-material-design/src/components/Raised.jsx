/* jshint node: true, esnext: true */
"use strict";

var React = require('react');
var ReactCSS = require('reactcss');

class Raised extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        wrap: {
          position: 'relative',
        },
        content: {
          position: 'relative',
        },
        bg: {
          Absolute: '0 0 0 0',
          boxShadow: '0 ${ this.props.zDepth }px ${ this.props.zDepth * 4 }px rgba(0,0,0,.24)',
          borderRadius: this.props.radius,
          background: this.props.background,
        },
      },
      'zDepth-0': {
        bg: {
          boxShadow: 'none',
        },
      },

      'zDepth-1': {
        bg: {
          boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)',
        },
      },
      'zDepth-2': {
        bg: {
          boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)',
        },
      },
      'zDepth-3': {
        bg: {
          boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)',
        },
      },
      'zDepth-4': {
        bg: {
          boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)',
        },
      },
      'zDepth-5': {
        bg: {
          boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)',
        },
      },
      'square': {
        bg: {
          borderRadius: '0',
        },
      },
      'circle': {
        bg: {
          borderRadius: '50%',
        },
      },
    };
  }

  render() {
    return (
      <div is="wrap">
        <div is="bg" />
        <div is="content">{ this.props.children }</div>
      </div>
    );
  }
}

Raised.propTypes = {
  background: React.PropTypes.string,
  zDepth: React.PropTypes.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
  radius: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: '1',
  radius: '2px',
};

module.exports = Raised;
