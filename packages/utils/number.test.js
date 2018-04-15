// @flow

import { clamp } from './number'

describe('clamp', () => {
  test('returns 0 if less than 0', () => {
    const value = clamp({ value: -10, max: 10 })
    expect(value).toBe(0)
  })

  test('returns end if greater than', () => {
    const value = clamp({ value: 100, max: 80 })
    expect(value).toBe(80)
  })

  test('returns value', () => {
    const value = clamp({ value: 50, max: 80 })
    expect(value).toBe(50)
  })
})
