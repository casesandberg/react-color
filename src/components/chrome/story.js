import React from 'react'
import { storiesOf } from '@storybook/react'

import Chrome from './Chrome'

storiesOf('Pickers', module)
  .add('ChromePicker', () => (
    <Chrome />
  ))
