'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
// import ReactDOMServer from 'react-dom-server'

import Home from './components/home/Home'

// const html = ReactDOMServer.renderToString(React.createElement(Home))
// console.log(html)

if (typeof document !== 'undefined') {
  ReactDOM.render(
    React.createElement(Home),
    document.getElementById('root')
  )
}

module.exports = Home
