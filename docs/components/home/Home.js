'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import HomeFeature from './HomeFeature'
import HomeDocumentation from './HomeDocumentation'

class Home extends ReactCSS.Component {

  constructor() {
    super()

    this.state = {
      primaryColor: '#194D33',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  classes() {
    return {
      'default': {
        home: {
          fontFamily: 'Roboto',
        },
      },
    }
  }

  handleChange(hex) {
    this.setState({ primaryColor: '#' + hex })
  }

  render() {
    return (
      <div is="home">

        <style>{`
          html, body {
            background: #eee;
            overflow-x: hidden;
          }
          .flexbox-fix {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
          }
        `}</style>

        <HomeFeature onChange={ this.handleChange } />
        <HomeDocumentation primaryColor={ this.state.primaryColor } />
      </div>
    )
  }
}

export default Home
