import React from 'react'
import { storiesOf } from '@storybook/react'

import Photoshop from './Photoshop'

storiesOf('Pickers', module)
  .add('PhotoshopPicker', () => (
    <Photoshop />
  ))
