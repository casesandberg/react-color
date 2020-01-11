import React from 'react'
import { reducer } from './store'
import colorspaces from '@color-picker/colorspaces'

export default (Component) => {
  return class ColorPicker extends React.Component {
    constructor(props) {
      super(props)
      this.state = reducer({})
    }

    dispatch = (action) => {
      const newState = reducer(action, this.state)
      console.log(action.type, action, newState) // eslint-disable-line no-console
      this.setState(newState)
    }

    stateToValues = (state) => {
      const values = {}

      colorspaces.list().forEach((colorspace) => {
        values[colorspace.name] = colorspace.fromLab(state.lab)
      })

      return values
    }

    render() {
      return <Component values={this.stateToValues(this.state)} dispatch={this.dispatch} />
    }
  }
}
