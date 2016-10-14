/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Chrome from './Chrome'
import ChromeFields from './ChromeFields'
import ChromePointer from './ChromePointer'
import ChromePointerCircle from './ChromePointerCircle'

test('Chrome renders correctly', () => {
  const tree = renderer.create(
    <Chrome { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ChromeFields renders correctly', () => {
  const tree = renderer.create(
    <ChromeFields { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ChromePointer renders correctly', () => {
  const tree = renderer.create(
    <ChromePointer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ChromePointerCircle renders correctly', () => {
  const tree = renderer.create(
    <ChromePointerCircle />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
