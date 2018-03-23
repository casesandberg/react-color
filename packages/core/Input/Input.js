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
    value: this.props.value || '',
    keyCode: null
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state
    if (this.state.focused === false && value !== nextProps.value) {
      this.setState(() => ({ value: nextProps.value }))
    }
  }

  handleChange = (event) => {
    const { transformValueOnChange, onChange } = this.props
    const { value: prevValue, keyCode, shiftKey } = this.state
    const nextValue = event.target.value
    const value = transformValueOnChange
      ? transformValueOnChange({
          value: nextValue,
          prevValue,
          keyCode,
          shiftKey,
        })
      : nextValue

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
    const {
      placeholder,
      style,
      type = 'text',
      value: propValue = '',
      formatDisplayValue
    } = this.props
    const value = this.state.value === '' ? propValue : this.state.value
    return (
      <input
        type={ type }
        value={ formatDisplayValue ? formatDisplayValue({ value }) : value }
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
      transformValueOnChange={
        ({ value, prevValue }) => validateLimit({ limit, value, prevValue })
      }
    />
  )
}

export const UnitInvervalInput = (props) => {
  return (
    <Input
      { ...props }
      type="number"
      transformValueOnChange={
        ({ value, prevValue, keyCode, shiftKey }) =>
        validateUnitInterval({ value, prevValue, keyCode, shiftKey })
      }
    />
  )
}

export const HexInput = ({ displayHash = true, ...props }) => {
  return (
    <Input
      { ...props }
      formatDisplayValue={ ({ value }) => displayHash ? value : value.replace('#', '') }
      transformValueOnChange={
        ({ value, prevValue }) => validateHexColor({ value, prevValue, displayHash })
      }
    />
  )
}
