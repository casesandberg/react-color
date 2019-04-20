// @flow
export const selector = 'colorPicker'

export const actionTypes = {
  CHANGE: `${selector}/CHANGE`,
}

type Actions = Change
type Action = {
  type: string,
}
type Change = {
  type: typeof actionTypes.CHANGE,
  colorspace: string,
  change: {},
}

export const actions = {
  change: ({ colorspace, change }: $Diff<Change, Action>): Change => ({ type: actionTypes.CHANGE, colorspace, change }),
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
