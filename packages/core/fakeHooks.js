import React from 'react'
import { reducer } from './store'

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

    render() {
      return <Component values={this.state} dispatch={this.dispatch} />
    }
  }
}
