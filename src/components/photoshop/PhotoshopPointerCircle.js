'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class PhotoshopPointerCircle extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  render(): any {

    const styles = reactCSS({
      'default': {
        picker: {
          width: '12px',
          height: '12px',
          borderRadius: '6px',
          boxShadow: 'inset 0 0 0 1px #fff',
          transform: 'translate(-6px, -6px)',
        },
      },
      'black-outline': {
        picker: {
          boxShadow: 'inset 0 0 0 1px #000',
        },
      },
    }, {
      'black-outline': this.props.hsl.l > .5,
    });

    return (
      <div style={ styles.picker }></div>
    )
  }
}

export default PhotoshopPointerCircle
