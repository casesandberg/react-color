// @flow
import { register, get, list } from './colorspaces'
import hex from './hex'
import hsl from './hsl'
import hsv from './hsv'
import rgb from './rgb'

register(hex)
register(hsl)
register(hsv)
register(rgb)

export { register, get, list }

export default exports
