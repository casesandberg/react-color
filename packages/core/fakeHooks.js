import React from 'react'
import { reducer } from './usePickerStore'

export default (Component) => {
  return class ColorPicker extends React.Component {
    state = {
      hsl: {
        h: 76,
      },
    }

    dispatch = (action) => {
      this.setState(reducer(action, this.state))
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
