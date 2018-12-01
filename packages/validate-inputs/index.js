// @flow
import { clamp } from '@case/utils'
import { UP_ARROW, DOWN_ARROW } from '@keyboard/keys'

type ValidateLimit = {
  limit: number,
  value: string,
  prevValue: number,
}

export const validateLimit = ({ limit, value, prevValue }: ValidateLimit): number | '' => {
  const number = parseInt(value, 10)

  if (value === '') {
    return value
  } else if (number < 0) {
    return 0
  } else if (limit) {
    return number <= limit ? number : prevValue
  }
  return number
}

type CalculateNextNumber = {
  value: string,
  prevValue: number,
  keyCode?: number,
  step?: number
}

export const calculateNextNumber = ({ prevValue, value, keyCode, step = 1}: CalculateNextNumber): number => {
  const number = parseFloat(prevValue || 0)

  if (keyCode === UP_ARROW) {
    return parseFloat((number + step).toFixed(2))
  } else if (keyCode === DOWN_ARROW) {
    return parseFloat((number - step).toFixed(2))
  }
  return parseFloat(value || 0)
}

type ValidateUnitInterval = {
  value: string,
  prevValue: number,
  keyCode?: number,
  shiftKey?: boolean,
}

export const validateUnitInterval = ({ value, prevValue, keyCode, shiftKey }: ValidateUnitInterval): number | '' => {
  if (value === '') {
    return ''
  }
  const step = shiftKey ? 0.1 : 0.01
  const number = calculateNextNumber({ prevValue, value, keyCode, step })
  return clamp({ value: number, max: 1 })
}

type ValidateHexColor = {
  value: string,
  prevValue: string,
}

export const validateHexColor = ({ value, prevValue }: ValidateHexColor): string => {
  if (value === '#' || value === '') {
    return '#'
  }

  if (/^#?([a-fA-F0-9]){1,6}\b/.test(value)) {
    return /^#/.test(value) ? value : `#${ value }`
  }

  return prevValue
}
