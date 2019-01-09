// @flow

import { validateLimit, calculateNextNumber, validateUnitInterval, validateHexColor } from './'
import { UP_ARROW, DOWN_ARROW } from '@keyboard/keys'

describe('validateLimit', () => {
  test('returns empty string if value is empty', () => {
    const change = validateLimit({ value: '', limit: 1, prevValue: 1 })
    expect(change).toBe('')
  })

  test('returns 0 if less than 0', () => {
    const change = validateLimit({ value: '-1', limit: 1, prevValue: 1 })
    expect(change).toBe(0)
  })

  test('returns 1 if value is "1"', () => {
    // $FlowFixMe
    const change = validateLimit({ value: '1' })
    expect(change).toBe(1)
  })

  test('returns prevValue if value is greater than limit', () => {
    const change = validateLimit({ limit: 10, value: '20', prevValue: 9 })
    expect(change).toBe(9)
  })
})

describe('calculateNextNumber', () => {
  test('returns 0 if no value', () => {
    const change = calculateNextNumber({ value: '', prevValue: 0 })
    expect(change).toBe(0)
  })

  test('returns 1 if value is "1"', () => {
    const change = calculateNextNumber({ value: '1', prevValue: 0 })
    expect(change).toBe(1)
  })

  test('returns 2 if prevValue was 1 and used up arrow', () => {
    const change = calculateNextNumber({ prevValue: 1, keyCode: UP_ARROW, value: '0' })
    expect(change).toBe(2)
  })

  test('returns 5 if prevValue was 1 and used up arrow with a step of 4', () => {
    const change = calculateNextNumber({ prevValue: 1, keyCode: UP_ARROW, value: '0', step: 4 })
    expect(change).toBe(5)
  })
})

describe('validateUnitInterval', () => {
  test('returns empty string if value is empty', () => {
    const change = validateUnitInterval({ value: '', prevValue: 0 })
    expect(change).toBe('')
  })

  test('returns value inside 0 and 1', () => {
    const change = validateUnitInterval({ value: '0.5', prevValue: 0 })
    expect(change).toBe(0.5)
  })

  test('returns one hundredth incremented with up arrow', () => {
    const change = validateUnitInterval({ prevValue: 0.5, keyCode: UP_ARROW, value: '0' })
    expect(change).toBe(0.51)
  })

  test('returns one tenth incremented with up arrow and shift', () => {
    const change = validateUnitInterval({ prevValue: 0.5, keyCode: UP_ARROW, shiftKey: true, value: '0' })
    expect(change).toBe(0.6)
  })

  test('returns 0 when down arrow less than 0', () => {
    const change = validateUnitInterval({ prevValue: 0, keyCode: DOWN_ARROW, shiftKey: true, value: '0' })
    expect(change).toBe(0)
  })
})

describe('validateHexColor', () => {
  test('returns hash if value is empty', () => {
    const change = validateHexColor({ value: '', prevValue: '' })
    expect(change).toBe('#')
  })

  test('returns valid hex', () => {
    const change = validateHexColor({ value: '#333', prevValue: '' })
    expect(change).toBe('#333')
  })

  test('returns previous value with invalid value', () => {
    const change = validateHexColor({ value: '#333j', prevValue: '#333' })
    expect(change).toBe('#333')
  })

  test('returns previous value with invalid value', () => {
    const change = validateHexColor({ value: '##333j', prevValue: '#333' })
    expect(change).toBe('#333')
  })

  test('returns previous value if value too long', () => {
    const change = validateHexColor({ value: '#1234567', prevValue: '#123456' })
    expect(change).toBe('#123456')
  })
})
