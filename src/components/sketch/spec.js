/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'
// import canvas from 'canvas'

import Sketch from './Sketch'
import SketchFields from './SketchFields'
import SketchPresetColors from './SketchPresetColors'

test('Sketch renders correctly', () => {
  const tree = renderer.create(
    <Sketch { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

// test('Sketch renders on server correctly', () => {
//   const tree = renderer.create(
//     <Sketch renderers={{ canvas }} { ...red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

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
