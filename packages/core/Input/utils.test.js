import { eventWithTargetValue } from './utils'

test('eventWithTargetValue returns an empty string', () => {
  const newEvent = eventWithTargetValue()
  expect(newEvent).toEqual({ target: { value: '' } })
})

test('eventWithTargetValue adds value to blank event', () => {
  const newEvent = eventWithTargetValue({ value: 'foo' })
  expect(newEvent).toEqual({ target: { value: 'foo' } })
})

test('eventWithTargetValue adds value to existing event', () => {
  const event = { keyCode: 32, target: { name: 'email' } }
  const newEvent = eventWithTargetValue({ event, value: 'foo' })
  expect(newEvent).toEqual({ keyCode: 32, target: { name: 'email', value: 'foo' } })
})
