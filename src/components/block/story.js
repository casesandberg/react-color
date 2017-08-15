import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Block from './Block'

storiesOf('Pickers', module)
  .add('BlockPicker', () => (
    <SyncColorField component={ Block }>
      { renderWithKnobs(Block, {}, null, {
        width: { range: true, min: 140, max: 500, step: 1 },
      }) }
    </SyncColorField>
  ))
