/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { red } from '../../helpers/color'

import Github from './Github'
import GithubSwatch from './GithubSwatch'

test('Github renders correctly', () => {
  const tree = renderer.create(
    <Github { ...red } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Github `triangle="none"`', () => {
  const tree = renderer.create(
    <Github { ...red } triangle="none" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Github `triangle="top-right"`', () => {
  const tree = renderer.create(
    <Github { ...red } triangle="top-right" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('GithubSwatch renders correctly', () => {
  const tree = renderer.create(
    <GithubSwatch color="#333" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
