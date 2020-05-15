/* global test, jest, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import color, { red } from '../../helpers/color'

import Twitter from './Twitter'
import { Swatch } from '../common'

test('Twitter renders correctly', () => {
  const tree = renderer.create(
    <Twitter { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Material renders custom styles correctly', () => {
  const tree = renderer.create(
    <Twitter { ...red } styles={{ default: { card: { boxShadow: '0 0 10px red' } } }} />,
  ).toJSON()
  expect(tree.props.style.boxShadow).toBe('0 0 10px red')
})

test('Twitter `triangle="hide"`', () => {
  const tree = renderer.create(
    <Twitter { ...red } triangle="hide" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Twitter `triangle="top-right"`', () => {
  const tree = renderer.create(
    <Twitter { ...red } triangle="top-right" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Twitter onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Twitter { ...red } onChange={ changeSpy } />,
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch)
  swatches.at(0).childAt(0).simulate('click')

  expect(changeSpy).toHaveBeenCalled()
})

test('Twitter with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Twitter { ...red } onSwatchHover={ hoverSpy } />,
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch)
  swatches.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
})

test('Twitter with "hideHexInput" hides hex input', () => {
  const tree = mount(<Twitter {...red} hideHexInput />)
  expect(tree.props().hideHexInput).toEqual(true)
  expect(tree.find('.hexInputContainer')).toHaveLength(0)
  tree.setProps({ hideHexInput: false })
  expect(tree.props().hideHexInput).toEqual(false)
  expect(tree.find('.hexInputContainer')).toHaveLength(1)
})
