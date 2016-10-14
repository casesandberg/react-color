/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Alpha from './Alpha'
import AlphaPointer from './AlphaPointer'

test('Alpha renders correctly', () => {
  const tree = renderer.create(
    <Alpha />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('AlphaPointer renders correctly', () => {
  const tree = renderer.create(
    <AlphaPointer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
