/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import color, { red } from '../../helpers/color'
// import canvas from 'canvas'

import Alpha from './Alpha'
import { ColorWrap, Alpha as CommonAlpha } from '../common'
import AlphaPointer from './AlphaPointer'

test('Alpha renders correctly', () => {
  const tree = renderer.create(
    <Alpha { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

// test('Alpha renders on server correctly', () => {
//   const tree = renderer.create(
//     <Alpha renderers={{ canvas }} { ...red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('Alpha onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Alpha { ...red } width={ 20 } height={ 200 } onChange={changeSpy} />
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const alphaCommon = tree.find(CommonAlpha);
  alphaCommon.at(0).childAt(2).simulate('mouseDown', {
    pageX: 100,
    pageY: 10,
  })
  expect(changeSpy).toHaveBeenCalled()
})

test('Alpha renders vertically', () => {
  const tree = renderer.create(
    <Alpha { ...red } width={ 20 } height={ 200 } direction="vertical" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('AlphaPointer renders correctly', () => {
  const tree = renderer.create(
    <AlphaPointer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
