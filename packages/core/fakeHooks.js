import React from 'react'
import { reducer } from './usePickerStore'

export default (Component) => {
  return class ColorPicker extends React.Component {
    constructor(props) {
      super(props)
      this.state = reducer({})
    }

    dispatch = (action) => {
      const newState = reducer(action, this.state)
      console.log(action.type, action, newState)
      this.setState(newState)
    }

    fakeHook = (value) => {
      if (!this.state.hex) {
        this.setState({ hex: value })
      }
      return [this.state, this.dispatch]
    }

    render() {
      return <Component usePickerStore={this.fakeHook} />
    }
  }
}
