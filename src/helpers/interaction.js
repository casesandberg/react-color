/* eslint-disable no-invalid-this */
import React from 'react'

export const handleFocus = (Component, Span = 'span') =>
  class Focus extends React.Component {
    state = { focus: false }
    handleFocus = () => this.setState({ focus: true })
    handleBlur = () => this.setState({ focus: false })

    render() {
      return (
        <Span onFocus={ this.handleFocus } onBlur={ this.handleBlur }>
          <Component { ...this.props } { ...this.state } />
        </Span>
      )
    }
  }
