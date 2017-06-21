/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';

import Circle from './Circle'
import CircleSwatch from './CircleSwatch'
import { Swatch } from '../common'

test('Circle renders correctly', () => {
  const tree = renderer.create(
    <Circle />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Circle with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn()
  const tree = mount(
    <Circle onSwatchHover={hoverSpy} />
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
})

test('CircleSwatch renders correctly', () => {
  const tree = renderer.create(
    <CircleSwatch />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('CircleSwatch renders with sizing and spacing', () => {
  const tree = renderer.create(
    <CircleSwatch circleSize={ 40 } circleSpacing={ 40 } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
