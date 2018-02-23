import React from 'react'
import { storiesOf } from '@storybook/react'

import { HorizontalGradient, VerticalGradient } from './'

storiesOf('shared', module)
  .add('HorizontalGradient', () => (
    <div style={{ width: 200, height: 100, display: 'flex' }}>
      <HorizontalGradient stops={ ['red', 'pink'] } />
    </div>
  ))
  .add('HorizontalGradient transparent stop', () => (
    <div style={{ width: 200, height: 100, display: 'flex' }}>
      <HorizontalGradient stops={ ['rgba(0,0,0,1)', 'rgba(0,0,0,0)'] } />
    </div>
  ))
  .add('HorizontalGradient multiple stops', () => (
    <div style={{ width: 200, height: 100, display: 'flex' }}>
      <HorizontalGradient stops={ ['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#f00'] } />
    </div>
  ))
  .add('VerticalGradient', () => (
    <div style={{ width: 100, height: 200, display: 'flex' }}>
      <VerticalGradient stops={ ['lightblue', 'teal'] } />
    </div>
  ))
