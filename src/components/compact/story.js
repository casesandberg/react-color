import React from 'react'
import { storiesOf } from '@storybook/react'

import Compact from './Compact'

storiesOf('Pickers', module)
  .add('CompactPicker', () => (
    <Compact />
  ))
