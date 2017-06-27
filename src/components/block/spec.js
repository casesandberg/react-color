/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';

import Block from './Block'
import BlockSwatches from './BlockSwatches'
import { Swatch } from '../common'
import color from '../../helpers/color'

test('Block renders correctly', () => {
  const tree = renderer.create(
    <Block />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Block onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Block onChange={changeSpy} />
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click')

  expect(changeSpy).toHaveBeenCalled()
})

test('Block with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Block onSwatchHover={hoverSpy} />
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
})

test('Block `triangle="none"`', () => {
  const tree = renderer.create(
    <Block triangle="none" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('BlockSwatches renders correctly', () => {
  const tree = renderer.create(
    <BlockSwatches colors={ ['#fff', '#999', '#000'] } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
