/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import color, { red } from '../../helpers/color'

import Swatches from './Swatches'
import SwatchesColor from './SwatchesColor'
import SwatchesGroup from './SwatchesGroup'
import { Swatch } from '../common'

test('Swatches renders correctly', () => {
  const tree = renderer.create(
    <Swatches hex={ red.hex } colors={ [['#fff'], ['#333']] } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Swatches onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Swatches onChange={changeSpy} />
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click')

  expect(changeSpy).toHaveBeenCalled()
})

test('Swatches with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Swatches onSwatchHover={hoverSpy} />
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
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
