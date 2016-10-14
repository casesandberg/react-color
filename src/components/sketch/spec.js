/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Sketch from './Sketch'
import SketchFields from './SketchFields'
import SketchPresetColors from './SketchPresetColors'

test('Sketch renders correctly', () => {
  const tree = renderer.create(
    <Sketch { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SketchFields renders correctly', () => {
  const tree = renderer.create(
    <SketchFields { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('SketchPresetColors renders correctly', () => {
  const tree = renderer.create(
    <SketchPresetColors colors={ ['#fff', '#999', '#000'] } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
