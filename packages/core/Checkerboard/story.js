// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Checkerboard from './Checkerboard'

storiesOf('core/Checkerboard', module)
  .add('default', () => {
    return (
      <div style={{ width: 64, height: 64, display: 'flex' }}>
        <Checkerboard />
      </div>
    )
  })
  .add('custom size, color', () => {
    return (
      <div style={{ width: 64, height: 64, display: 'flex', backgroundColor: '#333' }}>
        <Checkerboard size={16} color="teal" />
      </div>
    )
  })
