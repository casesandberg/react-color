// @flow

type Clamp = {
  min?: number,
  max: number,
  value: number,
}

export const clamp = ({ min = 0, max, value }: Clamp): number => {
  return Math.max(min, Math.min(value, max))
}
