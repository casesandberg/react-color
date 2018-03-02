import React from 'react'
import { storiesOf } from '@storybook/react'

import Circle from './Circle'

storiesOf('Pickers', module)
  .add('CirclePicker', () => (
    <Circle />
  ))
