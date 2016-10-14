/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Block from './Block'
import BlockSwatches from './BlockSwatches'

test('Block renders correctly', () => {
  const tree = renderer.create(
    <Block />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('BlockSwatches renders correctly', () => {
  const tree = renderer.create(
    <BlockSwatches colors={ ['#fff', '#999', '#000'] } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
