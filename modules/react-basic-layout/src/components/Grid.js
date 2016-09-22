'use strict'

import React from 'react'
import reactCSS from 'reactcss'

class Grid extends React.Component {

  render() {
    const isMobile = document.getElementById('root').clientWidth < 500
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
          width: '513px',
        },
      },
      'preset-three': {
        left: {
          width: '410px',
          position: 'absolute',
          height: '100%',
        },
        main: {
          paddingLeft: '460px',
        },
      },

      'preset-four': {
        left: {
          width: '170px',
          position: 'absolute',
          height: '100%',
        },
        main: {
          paddingLeft: '210px',
        },
      },

      'mobile-default': {
        main: {
          padding: '0px',
        },
        left: {
          display: 'none',
        },
      },
      'mobile-one': {
        left: {
          paddingRight: '0px',
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
      'mobile-four': {
        grid: {
          display: 'none',
        },
      },
    }, {
      'preset-default': this.props.preset === 'default',
      'preset-one': this.props.preset === 'one',
      'preset-two': this.props.preset === 'two',
      'preset-three': this.props.preset === 'three',
      'preset-four': this.props.preset === 'four',
      'mobile-default': this.props.preset === 'default' && isMobile,
      'mobile-one': this.props.preset === 'one' && isMobile,
      'mobile-two': this.props.preset === 'two' && isMobile,
      'mobile-three': this.props.preset === 'three' && isMobile,
      'mobile-four': this.props.preset === 'four' && isMobile,
    })

    return (
      <div style={ styles.grid }>
        <div style={ styles.left }>{ this.props.children[0] }</div>
        <div style={ styles.main }>{ this.props.children[1] }</div>
      </div>
    )
  }
}

Grid.defaultProps = {
  preset: 'default',
}

export default Grid
