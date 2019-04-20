// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import { GradientDef, HorizontalGradient, VerticalGradient } from './'

storiesOf('core/GradientDef', module)
  .add('default', () => (
    <svg style={{ width: 200, height: 100, backgroundColor: 'blue' }}>
      <GradientDef end={{ y: 1 }} stops={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
    </svg>
  ))
  .add('multiple gradients', () => (
    <svg style={{ width: 200, height: 200, backgroundColor: 'red' }}>
      <GradientDef end={{ x: 1 }} stops={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']} />
      <GradientDef end={{ y: 1 }} stops={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
    </svg>
  ))

storiesOf('core/HorizontalGradient', module)
  .add('default', () => <HorizontalGradient width={200} height={100} stops={['red', 'pink']} />)
  .add('with transparent stop', () => (
    <HorizontalGradient width={200} height={100} stops={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']} />
  ))
  .add('with multiple stops', () => (
    <HorizontalGradient width={200} height={100} stops={['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#f00']} />
  ))

storiesOf('core/VerticalGradient', module).add('default', () => (
  <VerticalGradient width={100} height={200} stops={['lightblue', 'teal']} />
))
