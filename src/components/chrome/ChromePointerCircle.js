'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'

export class ChromePointerCircle extends ReactCSS.Component {

  classes(): any {
    return {
      'default': {
        picker: {
          width: '12px',
          height: '12px',
          borderRadius: '6px',
          boxShadow: 'inset 0 0 0 1px #fff',
          transform: 'translate(-6px, -6px)',
        },
      },
    }
  }

  render(): any {
    return (
      <div is="picker"></div>
    )
  }

}

export default ChromePointerCircle
