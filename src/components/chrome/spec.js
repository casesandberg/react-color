/* global test, jest, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import color, { red } from '../../helpers/color'
import { mount } from 'enzyme'

import Chrome from './Chrome'
import ChromeFields from './ChromeFields'
import ChromePointer from './ChromePointer'
import ChromePointerCircle from './ChromePointerCircle'
import { Alpha } from '../common'


test('Chrome renders correctly', () => {
  const tree = renderer.create(
    <Chrome { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Chrome onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Chrome { ...red } onChange={ changeSpy } />,
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
//     <Chrome renderers={{ canvas }} { ...red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('ChromeFields renders correctly', () => {
  const tree = renderer.create(
    <ChromeFields { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ChromeFields renders with state.view="rgb" when defaultColorSpace={"rgb"} is passed in', () => {
  const tree = mount(
    <ChromeFields defaultColorSpace={ 'rgb' } { ...red } />,
  )
  expect(tree.state('view')).toEqual('rgb')
})

test('ChromeFields renders with state.view="hex" when defaultColorSpace={"hex"} is passed in', () => {
  const tree = mount(
    <ChromeFields defaultColorSpace={ 'hex' } { ...red } />,
  )
  expect(tree.state('view')).toEqual('hex')
})

test('ChromeFields renders with state.view="hsl" when defaultColorSpace={"hsl"} is passed in', () => {
  const tree = mount(
    <ChromeFields defaultColorSpace={ 'hsl' } { ...red } />,
  )
  expect(tree.state('view')).toEqual('hsl')
})

test('clicking ChromeFields svg button calls toggle function passed in as a prop', () => {
  const toggleSpy = jest.fn()
  const tree = mount(
    <ChromeFields onColorSpaceChange={ toggleSpy } { ...red } />,
  )
  expect(toggleSpy).toHaveBeenCalledTimes(1)
  const toggleBtn = tree.find('svg')
  toggleBtn.simulate('click')
  expect(toggleSpy).toHaveBeenCalledTimes(2)
})

test('clicking ChromeFields svg button updates state.view to "rgb" with toggle function and defaultColorSpace={"hex"} passed in as props', () => {
  const toggleSpy = jest.fn()
  const tree = mount(
    <ChromeFields onColorSpaceChange={ toggleSpy } defaultColorSpace={ 'hex' } { ...red } />,
  )
  expect(toggleSpy).toHaveBeenCalledTimes(1)
  const toggleBtn = tree.find('svg')
  toggleBtn.simulate('click')
  expect(toggleSpy).toHaveBeenCalledTimes(2)
  expect(tree.state('view')).toEqual('rgb')
})

test('clicking ChromeFields svg button updates state.view to "hsl" with toggle function and defaultColorSpace={"rgb"} passed in as props', () => {
  const toggleSpy = jest.fn()
  const tree = mount(
    <ChromeFields onColorSpaceChange={ toggleSpy } defaultColorSpace={ 'rgb' } { ...red } />,
  )
  expect(toggleSpy).toHaveBeenCalledTimes(1)
  const toggleBtn = tree.find('svg')
  toggleBtn.simulate('click')
  expect(toggleSpy).toHaveBeenCalledTimes(2)
  expect(tree.state('view')).toEqual('hsl')
})

test('clicking ChromeFields svg button updates state.view to "hex" with toggle function and defaultColorSpace={"hsl"} passed in as props', () => {
  const toggleSpy = jest.fn()
  const tree = mount(
    <ChromeFields onColorSpaceChange={ toggleSpy } defaultColorSpace={ 'hsl' } { ...red } />,
  )
  expect(toggleSpy).toHaveBeenCalledTimes(1)
  const toggleBtn = tree.find('svg')
  toggleBtn.simulate('click')
  expect(toggleSpy).toHaveBeenCalledTimes(2)
  expect(tree.state('view')).toEqual('hex')
})

test('ChromeFields updates state.view when defaultColorSpace prop is updated', () => {
  const tree = mount(
    <ChromeFields defaultColorSpace={ 'rgb' } { ...red } />,
  )
  expect(tree.state('view')).toEqual('rgb');
  tree.setProps({ defaultColorSpace: 'hex' });
  expect(tree.state('view')).toEqual('hex');
  tree.setProps({ defaultColorSpace: 'hsl' });
  expect(tree.state('view')).toEqual('hsl');
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
    <Chrome width={ 300 } />,
  ).toJSON()
  expect(tree.props.style.width).toBe(300)
})
