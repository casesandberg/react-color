/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';

import Block from './Block'
import BlockSwatches from './BlockSwatches'
import { Swatch } from '../common'

test('Block renders correctly', () => {
  const tree = renderer.create(
    <Block />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Block with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn()
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
