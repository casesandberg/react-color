// @flow

export const randomId = (): string =>
  Math.random()
    .toString(36)
    .slice(-8)
