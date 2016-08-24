'use strict';

import React from 'react';
import reactCSS from 'reactcss';

class Grid extends React.Component {

  render() {

    const styles = reactCSS({
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
          right: '0px',
          top: '0px',
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
    }, {
      'mobile-default': this.props.preset === 'default' && document.getElementById('root').clientWidth < 500,
      'mobile-one': this.props.preset === 'one' && document.getElementById('root').clientWidth < 500,
      'mobile-two': this.props.preset === 'two' && document.getElementById('root').clientWidth < 500,
      'mobile-three': this.props.preset === 'three' && document.getElementById('root').clientWidth < 500,
    }, this.props);

    return (
      <div style={ styles.grid }>
        <div style={ styles.left }>{ this.props.children[0] }</div>
        <div style={ styles.main }>{ this.props.children[1] }</div>
      </div>
    );
  }
}

Grid.defaultProps = {
  preset: 'default',
};

export default Grid;
