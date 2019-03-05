/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'
import { createNodeMock } from '../../../support/createNodeMock'

import Hue from './Hue'
import HuePointer from './HuePointer'

test('Hue renders correctly', () => {
  const tree = renderer.create(
    <Hue { ...red } />,
    { createNodeMock },
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Hue renders vertically', () => {
  const tree = renderer.create(
    <Hue { ...red } width={ 20 } height={ 200 } direction="vertical" />,
    { createNodeMock },
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Hue renders custom styles correctly', () => {
  const tree = renderer.create(
    <Hue { ...red } styles={{ default: { picker: { boxShadow: '0 0 10px red' } } }} />,
    { createNodeMock },
  ).toJSON()
  expect(tree.props.style.boxShadow).toBe('0 0 10px red')
})

test('HuePointer renders correctly', () => {
  const tree = renderer.create(
    <HuePointer />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
