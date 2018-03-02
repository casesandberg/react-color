import { keepInsideRange } from './utils'

describe('keepInsideRange', () => {
  test('returns 0 if less than 0', () => {
    const position = keepInsideRange({ position: -10 })
    expect(position).toBe(0)
  })

  test('returns end if greater than', () => {
    const position = keepInsideRange({ position: 100, end: 80 })
    expect(position).toBe(80)
  })

  test('returns position', () => {
    const position = keepInsideRange({ position: 50, end: 80 })
    expect(position).toBe(50)
  })
})
