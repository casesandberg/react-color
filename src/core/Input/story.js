import React from 'react'
import { storiesOf } from '@storybook/react'

import { Input, NumberInput, UnitInvervalInput } from './'

storiesOf('core/Input', module)
  .add('default', () => (
    <Input
      style={{ border: '1px solid #333' }}
      onChange={ ({ value }) => console.log(value) }
    />
  ))

  storiesOf('core/NumberInput', module)
    .add('default', () => (
      <NumberInput
        style={{ border: '1px solid #333' }}
        onChange={ ({ value }) => console.log(value) }
      />
    ))
    .add('limit = 20', () => (
      <NumberInput
        limit={ 20 }
        style={{ border: '1px solid #333' }}
        onChange={ ({ value }) => console.log(value) }
      />
    ))


    storiesOf('core/UnitInvervalInput', module)
      .add('default', () => (
        <UnitInvervalInput
          style={{ border: '1px solid #333' }}
          onChange={ ({ value }) => console.log(value) }
        />
      ))
