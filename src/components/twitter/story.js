import React from 'react'
import { storiesOf } from '@storybook/react'

import Twitter from './Twitter'

storiesOf('Pickers', module)
  .add('TwitterPicker', () => (
    <Twitter />
  ))
