// @flow
import type { Lab } from './lab'
import type { ColorSpace } from './colorspaces'
import chroma from 'chroma-js'

export type Hsl = {
  h: number,
  s: number,
  l: number,
  a: number,
}

export default ({
  name: 'hsl',
  fromLab: (lab: Lab): Hsl => {
    const color = chroma(lab, 'lab')
    const [h, s, l, a] = color.hsl()
    return { h, s, l, a }
  },
  toLab: (hsl: Hsl): Lab => {
    const color = chroma(hsl, 'hsl')
    return color.lab()
  },
}: ColorSpace)
