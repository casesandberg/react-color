/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Alpha from './Alpha'
import AlphaPointer from './AlphaPointer'

test('Alpha renders correctly', () => {
  const tree = renderer.create(
    <Alpha { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Alpha renders vertically', () => {
  const tree = renderer.create(
    <Alpha { ...red } width={ 20 } height={ 200 } direction="vertical" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('AlphaPointer renders correctly', () => {
  const tree = renderer.create(
    <AlphaPointer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
