import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Compact from './Compact'

storiesOf('Pickers', module)
  .add('CompactPicker', () => (
    <SyncColorField component={ Compact }>
      { renderWithKnobs(Compact, {}, null, {
        width: { range: true, min: 140, max: 500, step: 1 },
        circleSize: { range: true, min: 8, max: 72, step: 4 },
        circleSpacing: { range: true, min: 7, max: 42, step: 7 },
      }) }
    </SyncColorField>
  ))
