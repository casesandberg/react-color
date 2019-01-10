// @flow
import React from 'react'
import { validateLimit, validateUnitInterval, validateHexColor } from '@validate/inputs'
import { ESC } from '@keyboard/keys'
import { eventWithTargetValue } from './utils'

const resetInputStyle = {
  border: 'none',
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  WebkitBoxShadow: 'none',
  MozBoxShadow: 'none',
  boxShadow: 'none',
  outline: 'none',
}

type OnChange = {
  value: string,
  event: SyntheticInputEvent,
}

type OnValueChange = {
  value: string,
  prevValue: string,
  keyCode: number,
  shiftKey: boolean,
}

type Props = {
  placeholder: string,
  style: InlineStyle,
  type: string,
  value: string,
  formatDisplayValue?: ({ value: string }) => string,
  transformValueOnChange?: (OnValueChange) => string,
  onChange?: (OnChange) => any,
}

type State = {
  focused: boolean,
  value: string,
  keyCode: number,
  shiftKey: boolean,
}

export class Input extends React.Component<Props, State> {
  state = {
    focused: true,
    value: this.props.value || '',
    keyCode: 0,
    shiftKey: false,
  }

  componentWillReceiveProps(nextProps: Props) {
    const { value } = this.state
    if (this.state.focused === false && value !== nextProps.value) {
      this.setState(() => ({ value: nextProps.value }))
    }
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
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

    onChange &&
      onChange({
        event,
        value,
      })

    this.setState(() => ({ value }))
  }

  handleKeyDown = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = this.props
    event.persist && event.persist()
    if (event.keyCode === ESC) {
      this.handleChange(eventWithTargetValue({ event, value }))
    }

    this.setState(() => ({
      keyCode: event.keyCode,
      shiftKey: event.shiftKey,
    }))
  }

  resetSavedKeys = () => this.setState(() => ({ keyCode: 0, shiftKey: false }))
  resetValue = () => this.setState(() => ({ value: '' }))

  render() {
    const { placeholder, style, type = 'text', value: propValue = '', formatDisplayValue } = this.props
    const value = this.state.value === '' ? propValue : this.state.value
    return (
      <input
        type={type}
        value={formatDisplayValue ? formatDisplayValue({ value }) : value}
        placeholder={placeholder}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.resetSavedKeys}
        onBlur={this.resetValue}
        style={{ ...resetInputStyle, ...style }}
      />
    )
  }
}

type NumberInputProps = {
  limit: number,
} & Props

export const NumberInput = ({ limit, ...props }: NumberInputProps) => {
  return (
    <Input
      {...props}
      type="number"
      transformValueOnChange={({ value, prevValue }) => validateLimit({ limit, value, prevValue })}
    />
  )
}

export const UnitInvervalInput = (props) => {
  return (
    <Input
      {...props}
      type="number"
      transformValueOnChange={({ value, prevValue, keyCode, shiftKey }) =>
        validateUnitInterval({ value, prevValue, keyCode, shiftKey })
      }
    />
  )
}

export const HexInput = ({ displayHash = true, ...props }) => {
  return (
    <Input
      {...props}
      formatDisplayValue={({ value }) => (displayHash ? value : value.replace('#', ''))}
      transformValueOnChange={({ value, prevValue }) => validateHexColor({ value, prevValue, displayHash })}
    />
  )
}
