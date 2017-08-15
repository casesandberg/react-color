import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Github from './Github'

storiesOf('Pickers', module)
  .add('GithubPicker', () => (
    <SyncColorField component={ Github }>
      { renderWithKnobs(Github, {}, null, {
        width: { range: true, min: 140, max: 500, step: 1 },
      }) }
    </SyncColorField>
  ))
