import React from 'react'
import { storiesOf } from '@storybook/react'

import Sketch from './Sketch'

storiesOf('Pickers', module)
  .add('SketchPicker', () => (
    <Sketch />
  ))
