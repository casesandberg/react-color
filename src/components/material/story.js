import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Material from './Material'

storiesOf('Pickers', module)
  .add('MaterialPicker', () => (
    <SyncColorField component={ Material }>
      { renderWithKnobs(Material) }
    </SyncColorField>
  ))
