import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Google from './Google'

storiesOf('Pickers', module)
  .add('GooglePicker', () => (
    <SyncColorField component={ Google }>
      { renderWithKnobs(Google, {}, null) }
    </SyncColorField>
  ))