/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Slider from './Slider'
import SliderPointer from './SliderPointer'
import SliderSwatch from './SliderSwatch'
import SliderSwatches from './SliderSwatches'

test('Slider renders correctly', () => {
  const tree = renderer.create(
    <Slider { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SliderPointer renders correctly', () => {
  const tree = renderer.create(
    <SliderPointer />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SliderSwatch renders correctly', () => {
  const tree = renderer.create(
    <SliderSwatch { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SliderSwatches renders correctly', () => {
  const tree = renderer.create(
    <SliderSwatches { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
