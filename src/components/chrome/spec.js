/* global test, jest, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import * as color from '../../helpers/color'
import { mount } from 'enzyme'

import Chrome from './Chrome'
import ChromeFields from './ChromeFields'
import ChromePointer from './ChromePointer'
import ChromePointerCircle from './ChromePointerCircle'
import { Alpha } from '../common'


test('Chrome renders correctly', () => {
  const tree = renderer.create(
    <Chrome { ...color.red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Chrome onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Chrome { ...color.red } onChange={ changeSpy } />,
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)

  // check the Alpha component
  const alphaCommon = tree.find(Alpha)
  alphaCommon.at(0).childAt(2).simulate('mouseDown', {
    pageX: 100,
    pageY: 10,
  })
  expect(changeSpy).toHaveBeenCalledTimes(1)

  // TODO: check the Hue component
  // TODO: check the ChromeFields
  // TODO: check Saturation
})

// test('Chrome renders on server correctly', () => {
//   const tree = renderer.create(
//     <Chrome renderers={{ canvas }} { ...color.red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('ChromeFields renders correctly', () => {
  const tree = renderer.create(
    <ChromeFields { ...color.red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ChromePointer renders correctly', () => {
  const tree = renderer.create(
    <ChromePointer />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ChromePointerCircle renders correctly', () => {
  const tree = renderer.create(
    <ChromePointerCircle />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Chrome renders custom styles correctly', () => {
  const tree = renderer.create(
    <Chrome styles={{ default: { picker: { boxShadow: 'none' } } }} />,
  ).toJSON()
  expect(tree.props.style.boxShadow).toBe('none')
})

test('Chrome renders correctly with width', () => {
  const tree = renderer.create(
    <Chrome width={300} />,
  ).toJSON()
  expect(tree.props.style.width).toBe(300)
});
