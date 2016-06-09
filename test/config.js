
import chai from 'chai'
const expect = chai.expect
require('testdom')('<html><body></body></html>')
import spies from 'chai-spies'
chai.use(spies)

const React = require('react')
const ReactDOM = require('react-dom')
const TestUtils = require('react-addons-test-utils')

import color from '../src/helpers/color'

let defaultProps = color.toState('194d33')

export { React, ReactDOM, TestUtils, expect, chai, spies, defaultProps }
