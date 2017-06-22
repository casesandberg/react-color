/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import color, { red } from '../../helpers/color'

import Twitter from './Twitter'
import { Swatch } from '../common'

test('Twitter renders correctly', () => {
  const tree = renderer.create(
    <Twitter { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Twitter `triangle="none"`', () => {
  const tree = renderer.create(
    <Twitter { ...red } triangle="none" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Twitter `triangle="top-right"`', () => {
  const tree = renderer.create(
    <Twitter { ...red } triangle="top-right" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Twitter onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Twitter { ...red } onChange={changeSpy} />
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click')

  expect(changeSpy).toHaveBeenCalled()
})

test('Twitter with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Twitter { ...red } onSwatchHover={hoverSpy} />
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
})