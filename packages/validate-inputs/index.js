import { clamp } from '@case/utils'

export const UP_ARROW = 38
export const DOWN_ARROW = 40

export const validateLimit = ({ limit, value, prevValue }) => {
  if (value === '') {
    return ''
  } else if (value < 0) {
    return 0
  }

  const number = parseInt(value, 10)
  if (limit) {
    return number <= limit ? number : prevValue
  }
  return number
}

export const calculateNextNumber = ({ prevValue, value, keyCode, step = 1}) => {
  const number = parseFloat(prevValue || 0, 10)

  if (keyCode === UP_ARROW) {
    return parseFloat((number + step).toFixed(2), 10)
  } else if (keyCode === DOWN_ARROW) {
    return parseFloat((number - step).toFixed(2), 10)
  }
  return parseFloat(value || 0, 10)
}

export const validateUnitInterval = ({ value, prevValue, keyCode, shiftKey }) => {
  if (value === '') {
    return ''
  }
  const step = shiftKey ? 0.1 : 0.01
  const number = calculateNextNumber({ prevValue, value, keyCode, step })
  return clamp({ value: number, max: 1 })
}

export const validateHexColor = ({ value, prevValue, displayHash = true }) => {
  if (value === '#' || value === '') {
    return displayHash ? '#' : ''
  }

  if (/^#?([a-fA-F0-9]){1,6}\b/.test(value)) {
    return value
  }

  return prevValue
}
