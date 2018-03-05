import React from 'react'

const resetInputStyle = {
  border: 'none',
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  WebkitBoxShadow: 'none',
  MozBoxShadow: 'none',
  boxShadow: 'none',
  outline: 'none',
}

export class Input extends React.Component {
  state = {
    focused: true,
    value: '',
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
      ? transform({ value: event.target.value, prevValue: this.state.value, keyCode: this.state.keyCode })
      : event.target.value

    const change = {
      event,
      value,
    }

    onChange(change)
    this.setState(change)
  }

  render() {
    const { placeholder, style, type = 'text' } = this.props
    const { value } = this.state
    return (
      <input
        type={ type }
        value={ value }
        placeholder={ placeholder }
        onChange={ this.handleChange }
        onKeyDown={ ({ keyCode }) => this.setState(() => ({ keyCode })) }
        onKeyUp={ () => this.setState(() => ({ keyCode: null })) }
        style={{ ...resetInputStyle, ...style }}
      />
    )
  }
}

export const NumberInput = ({ limit, ...props }) => {
  const validateLimit = ({ value, prevValue }) => {
    if (value === '') {
      return ''
    } else if (value < 0) {
      return 0
    }

    const number = parseInt(value, 10)
    return limit && number <= limit ? number : prevValue
  }
  return (
    <Input
      { ...props }
      type="number"
      transform={ validateLimit }
    />
  )
}

const UP_ARROW = 38
const DOWN_ARROW = 40

export const UnitInvervalInput = (props) => {
  const validateUnitInterval = ({ value, prevValue, keyCode }) => {
    if (value === '') {
      return ''
    }

    const nextNumber = ({ prevValue, value, keyCode }) => {
      const number = parseFloat(prevValue || 0, 10)

      if (keyCode === UP_ARROW) {
        return Number((number + 0.01).toFixed(2))
      } else if (keyCode === DOWN_ARROW) {
        return Number((number - 0.01).toFixed(2))
      }
      return parseFloat(value || 0, 10)
    }

    const number = nextNumber({ prevValue, value, keyCode })
    if (number < 0) {
      return 0
    } else if (number > 1) {
      return 1
    }

    return number
  }
  return (
    <Input
      { ...props }
      type="number"
      transform={ validateUnitInterval }
    />
  )
}
