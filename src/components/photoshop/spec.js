/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Photoshop from './Photoshop'
import PhotoshopButton from './PhotoshopButton'
import PhotoshopFields from './PhotoshopFields'
import PhotoshopPointer from './PhotoshopPointer'
import PhotoshopPointerCircle from './PhotoshopPointerCircle'
import PhotoshopPreviews from './PhotoshopPreviews'

test('Photoshop renders correctly', () => {
  const tree = renderer.create(
    <Photoshop { ...red } onAccept={ () => {} } onCancel={ () => {} } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('PhotoshopButton renders correctly', () => {
  const tree = renderer.create(
    <PhotoshopButton label="accept" onClick={ () => {} } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('PhotoshopFields renders correctly', () => {
  const tree = renderer.create(
    <PhotoshopFields { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('PhotoshopPointer renders correctly', () => {
  const tree = renderer.create(
    <PhotoshopPointer />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('PhotoshopPointerCircle renders correctly', () => {
  const tree = renderer.create(
    <PhotoshopPointerCircle { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('PhotoshopPreviews renders correctly', () => {
  const tree = renderer.create(
    <PhotoshopPreviews { ...red } currencColor="#aeee00" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
