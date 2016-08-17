'use strict'

import React from 'react'
import reactCSS from 'reactcss'

import HomeFeature from './HomeFeature'
import HomeDocumentation from './HomeDocumentation'

class Home extends React.Component {

  constructor() {
    super()

    this.state = {
      primaryColor: '#194D33',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(hex) {
    this.setState({ primaryColor: '#' + hex })
  }

  render() {

    const styles = reactCSS({
      'default': {
        home: {
          fontFamily: 'Roboto',
        },
      },
    });

    return (
      <div style={ styles.home }>

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
