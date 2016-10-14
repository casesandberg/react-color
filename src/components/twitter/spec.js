/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Twitter from './Twitter'

test('Twitter renders correctly', () => {
  const tree = renderer.create(
    <Twitter { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
