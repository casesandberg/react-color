'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class ChromePointer extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        picker: {
          width: '12px',
          height: '12px',
          borderRadius: '6px',
          transform: 'translate(-6px, -1px)',
          backgroundColor: 'rgb(248, 248, 248)',
          boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.37)',
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

export default ChromePointer
