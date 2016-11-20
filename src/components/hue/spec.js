/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Hue from './Hue'
import HuePointer from './HuePointer'

test('Hue renders correctly', () => {
  const tree = renderer.create(
    <Hue { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Hue renders vertically', () => {
  const tree = renderer.create(
    <Hue { ...red } width={ 20 } height={ 200 } direction="vertical" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('HuePointer renders correctly', () => {
  const tree = renderer.create(
    <HuePointer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
