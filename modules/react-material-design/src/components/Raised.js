/* jshint node: true, esnext: true */
"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';

class Raised extends React.Component {

  render() {

    const styles = reactCSS({
      'default': {
        wrap: {
          position: 'relative',
        },
        content: {
          position: 'relative',
        },
        bg: {
          absolute: '0px 0px 0px 0px',
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
    }, this.props);

    return (
      <div style={ styles.wrap }>
        <div style={ styles.bg } />
        <div style={ styles.content }>{ this.props.children }</div>
      </div>
    );
  }
}

Raised.propTypes = {
  background: PropTypes.string,
  zDepth: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
  radius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: '1',
  radius: '2px',
};

export default Raised;
