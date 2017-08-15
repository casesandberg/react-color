import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Sketch from './Sketch'

storiesOf('Pickers', module)
  .add('SketchPicker', () => (
    <SyncColorField component={ Sketch }>
      { renderWithKnobs(Sketch, {}, null, {
        width: { range: true, min: 140, max: 500, step: 1 },
      }) }
    </SyncColorField>
  ))
