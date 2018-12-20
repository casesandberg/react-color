/* global test, test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Material from './Material'

test('Material renders correctly', () => {
  const tree = renderer.create(
    <Material { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Material renders custom styles correctly', () => {
  const tree = renderer.create(
    <Material { ...red } styles={{ default: { wrap: { boxShadow: '0 0 10px red' } } }} />,
  ).toJSON()
  expect(tree.props.style.boxShadow).toBe('0 0 10px red')
})

