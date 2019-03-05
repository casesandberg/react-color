/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'
import { createNodeMock } from '../../../support/createNodeMock'

import Slider from './Slider'
import SliderPointer from './SliderPointer'
import SliderSwatch from './SliderSwatch'
import SliderSwatches from './SliderSwatches'

test('Slider renders correctly', () => {
  const tree = renderer.create(
    <Slider { ...red } />,
    { createNodeMock },
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Slider renders custom styles correctly', () => {
  const tree = renderer.create(
    <Slider styles={{ default: { wrap: { boxShadow: 'none' } } }} />,
    { createNodeMock },
  ).toJSON()
  expect(tree.props.style.boxShadow).toBe('none')
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
