/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';

import Circle from './Circle'
import CircleSwatch from './CircleSwatch'
import { Swatch } from '../common'
import color from '../../helpers/color'

test('Circle renders correctly', () => {
  const tree = renderer.create(
    <Circle />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Circle onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Circle onChange={changeSpy} />
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click')

  expect(changeSpy).toHaveBeenCalled()
})


test('Circle with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
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
