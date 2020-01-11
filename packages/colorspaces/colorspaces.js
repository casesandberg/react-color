// @flow
import type { Lab } from './lab'

const colorspaces = {}

export type ColorSpace = {
  name: string,
  fromLab: (Lab) => any,
  toLab: (any) => Lab,
}

export const register = (colorspace: ColorSpace) => {
  colorspaces[colorspace.name] = colorspace
}

export const get = (name: string) => {
  return colorspaces[name]
}

export const list = () => {
  return Object.values(colorspaces)
}
