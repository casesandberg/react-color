/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import color, { red } from '../../helpers/color'

import Compact from './Compact'
import CompactColor from './CompactColor'
import CompactFields from './CompactFields'
import { Swatch } from '../common'

test('Compact renders correctly', () => {
  const tree = renderer.create(
    <Compact { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Compact with onSwatchHover renders correctly', () => {
  const tree = renderer.create(
    <Compact { ...red } onSwatchHover={()=>{}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Compact onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Compact { ...red } onChange={changeSpy} />
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click')

  expect(changeSpy).toHaveBeenCalled()
})

test('Compact with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Compact { ...red } onSwatchHover={hoverSpy} />
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
})

test('CompactColor renders correctly', () => {
  const tree = renderer.create(
    <CompactColor />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('CompactFields renders correctly', () => {
  const tree = renderer.create(
    <CompactFields { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
