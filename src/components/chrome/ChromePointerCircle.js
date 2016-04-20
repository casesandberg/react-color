'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class ChromePointerCircle extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  classes(): any {
    return {
      'default': {
        picker: {
          width: '12px',
          height: '12px',
          borderRadius: '6px',
          boxShadow: 'inset 0px 0px 0px 1px #fff',
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
