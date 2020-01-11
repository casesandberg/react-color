// @flow
import type { Lab } from './lab'
import type { ColorSpace } from './colorspaces'
import chroma from 'chroma-js'

export type Hsv = {
  h: number,
  s: number,
  v: number,
  a: number,
}

export default ({
  name: 'hsv',
  fromLab: (lab: Lab): Hsv => {
    const color = chroma(lab, 'lab')
    const [h, s, v, a] = color.hsv()
    return { h, s, v, a }
  },
  toLab: (hsv: Hsv): Lab => {
    const color = chroma(hsv, 'hsv')
    return color.lab()
  },
}: ColorSpace)
