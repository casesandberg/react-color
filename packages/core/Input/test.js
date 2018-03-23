import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Input, NumberInput, UnitInvervalInput, HexInput } from './'
import { eventWithTargetValue } from './utils'

const UP_ARROW = 38
const ESC = 27

Enzyme.configure({ adapter: new Adapter() })

describe('Input', () => {
  test('accepts value', () => {
    const container = shallow(
      <Input value="#333" />
    )
    expect(container.find('input').props().value).toBe('#333')
  })

  test('type causes onChange', () => {
    const handleChange = jest.fn(({ value, event }) => {
      expect(value).toBe('complete')
      expect(event.target.value).toBe('complete')
    })
    const container = shallow(
      <Input onChange={ handleChange } />
    )
    container.find('input').simulate('change', eventWithTargetValue({ value: 'complete' }))
  })

  test('reverts to prop value on blur', () => {

    const container = shallow(
      <Input value="#333" />
    )
    container.find('input').simulate('focus')
    container.find('input').simulate('change', eventWithTargetValue({ value: '#fff' }))
    expect(container.find('input').props().value).toBe('#fff')

    container.find('input').simulate('blur')
    expect(container.find('input').props().value).toBe('#333')
  })

  test('uses transformValueOnChange', () => {
    const handleChange = jest.fn(({ value }) => {
      expect(value).toBe('number\'s')
    })
    const container = shallow(
      <Input
        onChange={ handleChange }
        transformValueOnChange={ ({ value }) => `${ value }'s` }
      />
    )
    container.find('input').simulate('change', eventWithTargetValue({ value: 'number' }))
  })

  test('resets to prop value on esc', () => {
    const handleChange = jest.fn()
    const container = shallow(
      <Input
        value="#333"
        onChange={ handleChange }
      />
    )
    container.find('input').simulate('change', eventWithTargetValue({ value: 'number' }))
    expect(container.find('input').props().value).toBe('number')
    container.find('input').simulate('keydown', { keyCode: ESC })
    expect(handleChange).toHaveBeenLastCalledWith({
      event: {
        keyCode: ESC,
        target: {
          value: '#333'
        }
      },
      value: '#333'
    })
  })
})

describe('NumberInput', () => {
  test('accepts a number', () => {
    const container = mount(
      <NumberInput value={ 3 } />
    )
    expect(container.find('input').props().value).toBe(3)
  })

  test('does not accept a letter', () => {
    const container = mount(
      <NumberInput value={ 3 } />
    )
    container.find('input').simulate('change', eventWithTargetValue({ value: '3l' }))
    expect(container.find('input').props().value).toBe(3)
  })

  test('doesnt accept a number greater than limit', () => {
    const container = mount(
      <NumberInput value={ 2 } limit={ 10 } />
    )
    container.find('input').simulate('change', eventWithTargetValue({ value: '20' }))
    expect(container.find('input').props().value).toBe(2)
  })
})

describe('UnitInvervalInput', () => {
  test('has a min and max', () => {
    const container = mount(
      <UnitInvervalInput value={ 0.9 } />
    )
    container.find('input').simulate('change', eventWithTargetValue({ value: '-1' }))
    expect(container.find('input').props().value).toBe(0)

    container.find('input').simulate('change', eventWithTargetValue({ value: '2' }))
    expect(container.find('input').props().value).toBe(1)
  })

  test('increments up one onehundreth', () => {
    const container = mount(
      <UnitInvervalInput value={ 0.9 } />
    )
    container.find('input').simulate('keydown', { keyCode: UP_ARROW })
    container.find('input').simulate('change')
    expect(container.find('input').props().value).toBe(0.91)
  })

  test('increments up one tenth with shift', () => {
    const container = mount(
      <UnitInvervalInput value={ 0.9 } />
    )
    container.find('input').simulate('keydown', { keyCode: UP_ARROW, shiftKey: true })
    container.find('input').simulate('change')
    expect(container.find('input').props().value).toBe(1)
  })
})

describe('HexInput', () => {
  test('only extepts valid characters', () => {
    const container = mount(
      <HexInput value='#333' />
    )
    container.find('input').simulate('change', eventWithTargetValue({ value: '#333f' }))
    expect(container.find('input').props().value).toBe('#333f')

    container.find('input').simulate('change', eventWithTargetValue({ value: '#333fq' }))
    expect(container.find('input').props().value).toBe('#333f')
  })

  test('only extepts six characters', () => {
    const container = mount(
      <HexInput value='#333fff' />
    )
    container.find('input').simulate('change', eventWithTargetValue({ value: '#333ffff' }))
    expect(container.find('input').props().value).toBe('#333fff')
  })
})
