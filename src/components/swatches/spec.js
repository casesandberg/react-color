/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Swatches from './Swatches'
import SwatchesColor from './SwatchesColor'
import SwatchesGroup from './SwatchesGroup'

test('Swatches renders correctly', () => {
  const tree = renderer.create(
    <Swatches hex={ red.hex } colors={ [['#fff'], ['#333']] } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SwatchesColor renders correctly', () => {
  const tree = renderer.create(
    <SwatchesColor />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SwatchesColor renders with props', () => {
  const tree = renderer.create(
    <SwatchesColor active first last />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SwatchesGroup renders correctly', () => {
  const tree = renderer.create(
    <SwatchesGroup active={ red.hex } group={ ['#fff'] } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
