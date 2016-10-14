/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Compact from './Compact'
import CompactColor from './CompactColor'
import CompactFields from './CompactFields'

test('Compact renders correctly', () => {
  const tree = renderer.create(
    <Compact { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('CompactColor renders correctly', () => {
  const tree = renderer.create(
    <CompactColor />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('CompactFields renders correctly', () => {
  const tree = renderer.create(
    <CompactFields { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
