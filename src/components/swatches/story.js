import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Swatches from './Swatches'

storiesOf('Pickers', module)
  .add('SwatchesPicker', () => (
    <SyncColorField component={ Swatches }>
      { renderWithKnobs(Swatches, {}, null, {
        width: { range: true, min: 140, max: 500, step: 1 },
        height: { range: true, min: 140, max: 500, step: 1 },
      }) }
    </SyncColorField>
  ))
