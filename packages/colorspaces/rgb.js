// @flow
import type { Lab } from './lab'
import type { ColorSpace } from './colorspaces'
import chroma from 'chroma-js'

export type Rgb = {
  r: number,
  g: number,
  b: number,
  a?: number,
}

export default ({
  name: 'rgb',
  fromLab: (lab: Lab): Rgb => {
    const color = chroma(lab, 'lab')
    const [r, g, b, a] = color.rgba()
    return { r, g, b, a }
  },
  toLab: (rgb: Rgb): Lab => {
    const color = chroma(rgb, 'rgb')
    return color.lab()
  },
}: ColorSpace)
