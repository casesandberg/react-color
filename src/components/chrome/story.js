import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Chrome from './Chrome'

storiesOf('Pickers', module)
  .add('ChromePicker', () => (
    <SyncColorField component={ Chrome }>
      { renderWithKnobs(Chrome, {}, null) }
    </SyncColorField>
  ))
