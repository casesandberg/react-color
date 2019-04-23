// @flow
import type { Lab } from './lab'
import type { ColorSpace } from './colorspaces'
import chroma from 'chroma-js'

export type Hex = string

export default ({
  name: 'hex',
  fromLab: (lab: Lab): Hex => {
    const color = chroma(lab, 'lab')
    return color.hex()
  },
  toLab: (hex: Hex): Lab => {
    const color = chroma(hex, 'hex')
    return color.lab()
  },
}: ColorSpace)
