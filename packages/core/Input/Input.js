import React from 'react'
import {
  validateLimit,
  validateUnitInterval,
  validateHexColor
} from '../../../packages/validate-inputs'

const resetInputStyle = {
  border: 'none',
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  WebkitBoxShadow: 'none',
  MozBoxShadow: 'none',
  boxShadow: 'none',
  outline: 'none',
}

const ESC = 27

export class Input extends React.Component {
  state = {
    focused: true,
    value: this.props.value,
    keyCode: null
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state
    if (this.state.focused === false && value !== nextProps.value) {
      this.setState(() => ({ value: nextProps.value }))
    }
  }

  handleChange = (event) => {
    const { transform, onChange } = this.props
    const value = transform
      ? transform({
          value: event.target.value,
          prevValue: this.state.value,
          keyCode: this.state.keyCode,
          shiftKey: this.state.shiftKey,
        })
      : event.target.value

    const change = {
      event,
      value,
    }

    onChange(change)
    this.setState(() => change)
  }

  handleKeyDown = (event) => {
    event.persist()
    if (event.keyCode === ESC) {
      this.handleChange({ ...event, target: { ...event.target, value: this.props.value || '' } })
    }

    this.setState(() => ({
      keyCode: event.keyCode,
      shiftKey: event.shiftKey
    }))
  }

  resetSavedKeys = () => this.setState(() => ({ keyCode: null, shiftKey: false }))
  resetValue = () => this.setState(() => ({ value: '' }))

  render() {
    const { placeholder, style, type = 'text', value = '' } = this.props
    return (
      <input
        type={ type }
        value={ this.state.value === '' ? value : this.state.value }
        placeholder={ placeholder }
        onChange={ this.handleChange }
        onKeyDown={ this.handleKeyDown }
        onKeyUp={ this.resetSavedKeys }
        onBlur={ this.resetValue }
        style={{ ...resetInputStyle, ...style }}
      />
    )
  }
}

export const NumberInput = ({ limit, ...props }) => {
  return (
    <Input
      { ...props }
      type="number"
      transform={ ({ value, prevValue }) => validateLimit({ limit, value, prevValue }) }
    />
  )
}

export const UnitInvervalInput = (props) => {
  return (
    <Input
      { ...props }
      type="number"
      transform={ validateUnitInterval }
    />
  )
}

export const HexInput = (props) => {
  return (
    <Input
      { ...props }
      transform={ validateHexColor }
    />
  )
}
