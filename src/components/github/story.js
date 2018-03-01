import React from 'react'
import { storiesOf } from '@storybook/react'

import Github from './Github'

storiesOf('Pickers', module)
  .add('GithubPicker', () => (
    <Github />
  ))
