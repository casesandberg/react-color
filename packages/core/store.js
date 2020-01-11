// @flow
import colorspaces from '@color-picker/colorspaces'

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
  change: Object,
}

export const actions = {
  change: ({ colorspace, change }: $Diff<Change, Action>): Change => ({ type: actionTypes.CHANGE, colorspace, change }),
}

type State = {
  lab: Array<[number, number, number]>,
}

const initialState = {
  lab: colorspaces.get('hex').toLab('#4A90E2'),
}

export const reducer = (action: Actions, state: State = initialState) => {
  switch (action.type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        lab: colorspaces.get(action.colorspace).toLab(action.change),
      }
    default:
      return state
  }
}
