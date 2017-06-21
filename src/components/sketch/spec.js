/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import { red } from '../../helpers/color'
// import canvas from 'canvas'

import Sketch from './Sketch'
import SketchFields from './SketchFields'
import SketchPresetColors from './SketchPresetColors'
import { Swatch } from '../common'

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

test('Sketch with onSwatchHover events correctly', () => {
  const hoverSpy = jest.fn()
  const tree = mount(
    <Sketch onSwatchHover={hoverSpy} />
  )
  expect(hoverSpy).toHaveBeenCalledTimes(0)
  const swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver')

  expect(hoverSpy).toHaveBeenCalled()
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

test('SketchPresetColors with custom titles renders correctly', () => {
  const colors = [
    {
      color: '#fff',
      title: 'white',
    },
    {
      color: '#999',
      title: 'gray',
    },
    {
      color: '#000',
    },
    '#f00',
  ]
  const tree = renderer.create(
    <SketchPresetColors colors={ colors } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
