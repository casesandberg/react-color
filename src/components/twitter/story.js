import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Twitter from './Twitter'

storiesOf('Pickers', module)
  .add('TwitterPicker', () => (
    <SyncColorField component={ Twitter }>
      { renderWithKnobs(Twitter, {}, null, {
        width: { range: true, min: 140, max: 500, step: 1 },
      }) }
    </SyncColorField>
  ))
