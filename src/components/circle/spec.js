/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Circle from './Circle'
import CircleSwatch from './CircleSwatch'

test('Circle renders correctly', () => {
  const tree = renderer.create(
    <Circle />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('CircleSwatch renders correctly', () => {
  const tree = renderer.create(
    <CircleSwatch />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
