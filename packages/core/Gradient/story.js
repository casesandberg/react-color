// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import { GradientDef, HorizontalGradient, VerticalGradient } from './'

storiesOf('core/GradientDef', module)
  .add('default', () => (
    <svg style={{ width: 200, height: 100, display: 'flex', backgroundColor: 'blue' }}>
      <GradientDef end={{ y: 1 }} stops={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
    </svg>
  ))
  .add('multiple gradients', () => (
    <svg style={{ width: 200, height: 200, display: 'flex', backgroundColor: 'red' }}>
      <GradientDef end={{ x: 1 }} stops={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']} />
      <GradientDef end={{ y: 1 }} stops={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
    </svg>
  ))

storiesOf('core/HorizontalGradient', module)
  .add('default', () => (
    <div style={{ width: 200, height: 100, display: 'flex' }}>
      <HorizontalGradient stops={['red', 'pink']} />
    </div>
  ))
  .add('with transparent stop', () => (
    <div style={{ width: 200, height: 100, display: 'flex' }}>
      <HorizontalGradient stops={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']} />
    </div>
  ))
  .add('with multiple stops', () => (
    <div style={{ width: 200, height: 100, display: 'flex' }}>
      <HorizontalGradient stops={['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#f00']} />
    </div>
  ))

storiesOf('core/VerticalGradient', module).add('default', () => (
  <div style={{ width: 100, height: 200, display: 'flex' }}>
    <VerticalGradient stops={['lightblue', 'teal']} />
  </div>
))
