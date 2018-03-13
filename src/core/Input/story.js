import React from 'react'
import { storiesOf } from '@storybook/react'

import { Input, NumberInput, UnitInvervalInput, HexInput } from './'

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

storiesOf('core/HexInput', module)
  .add('default', () => {
    class Picker extends React.Component {
      state = {
        color: '#aeee00'
      }

      render() {
        return (
          <div>
            <HexInput
              value={ this.state.color }
              style={{ border: '1px solid #333' }}
              onChange={ ({ value }) => {
                console.log(value)
                this.setState({ color: value })
              } }
            />
            <div style={{ width: 20, height: 20, backgroundColor: this.state.color }} />
          </div>
        )
      }
    }

    return <Picker />
  })
