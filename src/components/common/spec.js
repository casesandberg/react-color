/* global test, jest, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'
// import canvas from 'canvas'

import Alpha from './Alpha'
import Checkboard from './Checkboard'
import EditableInput from './EditableInput'
import Hue from './Hue'
import Saturation from './Saturation'
import Swatch from './Swatch'

test('Alpha renders correctly', () => {
  const tree = renderer.create(
    <Alpha { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

// test('Alpha renders on server correctly', () => {
//   const tree = renderer.create(
//     <Alpha renderers={{ canvas }} { ...red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('Checkboard renders correctly', () => {
  const tree = renderer.create(
    <Checkboard />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkboard renders children correctly', () => {
  const tree = renderer.create(
    <Checkboard><button>Click</button></Checkboard>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

// test('Checkboard renders on server correctly', () => {
//   const tree = renderer.create(
//     <Checkboard renderers={{ canvas }} />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('EditableInput renders correctly', () => {
  const tree = renderer.create(
    <EditableInput label="Hex" placeholder="#fff" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Hue renders correctly', () => {
  const tree = renderer.create(
    <Hue { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Saturation renders correctly', () => {
  const tree = renderer.create(
    <Saturation { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Swatch renders correctly', () => {
  const tree = renderer.create(
    <Swatch color="#333" style={{ opacity: '0.4' }} />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Swatch renders custom title correctly', () => {
  const tree = renderer.create(
    <Swatch color="#fff" title="white" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Swatch renders with an onMouseOver handler correctly', () => {
  const tree = renderer.create(
    <Swatch color="#fff" title="white" onHover={ () => {} } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
