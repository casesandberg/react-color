import React from 'react'
import { storiesOf } from '@storybook/react'

import Block from './Block'

storiesOf('Pickers', module)
  .add('BlockPicker', () => (
    <Block />
  ))
