// @flow
export const selector = 'colorPicker'

export const actionTypes = {
  CHANGE_HEX: `${selector}/CHANGE_HEX`,
}

type Actions = ChangeHex
type ChangeHex = {
  type: typeof actionTypes.CHANGE_HEX,
  hex: string,
}

export const actions = {
  changeHex: ({ hex }: { hex: string }): ChangeHex => ({ type: actionTypes.CHANGE_HEX, hex }),
}

type State = {}

export const reducer = (action: Actions, state: State) => {
  switch (action.type) {
    case actionTypes.CHANGE_HEX:
      return {
        ...state,
        hex: action.hex,
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
