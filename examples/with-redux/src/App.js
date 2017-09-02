/* eslint-disable no-console */
import React from 'react'
import { connect } from 'react-redux'
import { actions as appActions } from './reducer'

import { SketchPicker } from 'react-color'

export const App = ({ color, onChangeColor }) => {
  return (
    <div>
      <SketchPicker
        color={ color }
        onChangeComplete={ onChangeColor }
      />
    </div>
  )
}

const mapStateToProps = state => ({
  color: state.color,
})

const mapDispatchToProps = {
  onChangeColor: appActions.changeColor,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
