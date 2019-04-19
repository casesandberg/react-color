// @flow
export const selector = 'colorPicker'

export const actionTypes = {
  CHANGE: `${selector}/CHANGE`,
  CHANGE_HEX: `${selector}/CHANGE_HEX`,
}

type Actions = ChangeHex
type ChangeHex = {
  type: typeof actionTypes.CHANGE_HEX,
  hex: string,
}

export const actions = {
  change: ({ colorspace, change }) => ({ type: actionTypes.CHANGE, colorspace, change }),
  changeHex: ({ hex }: { hex: string }): ChangeHex => ({ type: actionTypes.CHANGE_HEX, hex }),
}

type State = {}

const initialState = {
  hex: '#4A90E2',
  hsl: {
    h: 212,
    s: 72,
    l: 59,
    a: 1,
  },
  hsv: {
    h: 212,
    s: 67,
    v: 89,
    a: 1,
  },
  rgb: {
    r: 74,
    g: 144,
    b: 226,
    a: 1,
  },
}

export const reducer = (action: Actions, state: State = initialState) => {
  switch (action.type) {
    case actionTypes.CHANGE_HEX:
      return {
        ...state,
        hex: action.hex,
      }
    case actionTypes.CHANGE:
      return {
        ...state,
        [action.colorspace]: {
          ...state[action.colorspace],
          ...action.change,
        },
      }
    default:
      return state
  }
}

// Stubbed for real hooks
const useReducer = (value: any) => [{}, console.log] // eslint-disable-line
export default (value: any) => {
  const [values, dispatch] = useReducer(value)
  return [values, dispatch]
}
