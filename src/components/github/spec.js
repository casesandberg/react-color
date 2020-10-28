/* global test, jest, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import * as color from '../../helpers/color'

import Github from './Github'
import GithubSwatch from './GithubSwatch'
import { Swatch } from '../common'

test('Github renders correctly', () => {
  const tree = renderer.create(
    <Github { ...color.red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Github onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Github onChange={ changeSpy } />,
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch)
  swatches.at(0).childAt(0).simulate('click')

  expect(changeSpy).toHaveBeenCalled()
})

test('Github with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Github onSwatchHover={ hoverSpy } />,
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch)
  swatches.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
})

test('Github `triangle="hide"`', () => {
  const tree = renderer.create(
    <Github { ...color.red } triangle="hide" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Github `triangle="top-right"`', () => {
  const tree = renderer.create(
    <Github { ...color.red } triangle="top-right" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Github renders custom styles correctly', () => {
  const tree = renderer.create(
    <Github { ...color.red } styles={{ default: { card: { boxShadow: '0 0 10px red' } } }} />,
  ).toJSON()
  expect(tree.props.style.boxShadow).toBe('0 0 10px red')
})

test('GithubSwatch renders correctly', () => {
  const tree = renderer.create(
    <GithubSwatch color="#333" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
