/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Material from './Material'

test('Material renders correctly', () => {
  const tree = renderer.create(
    <Material { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
