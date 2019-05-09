import React, { Component, PureComponent } from 'react'
import reactCSS from 'reactcss'

const DEFAULT_ARROW_OFFSET = 1

const UP_KEY_CODE = 38
const DOWN_KEY_CODE = 40
const VALID_KEY_CODES = [
  UP_KEY_CODE,
  DOWN_KEY_CODE
]
const isValidKeyCode = keyCode => VALID_KEY_CODES.indexOf(keyCode) > -1

const getFormattedPercentage = number => `${number}%`
const getNumberValue = value => Number(String(value).replace(/%/g, ''))
const getIsPercentage = value => String(value).indexOf('%') > -1

export class EditableInput extends (PureComponent || Component) {
  constructor(props) {
    super()

    this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase(),
    }
  }

  componentWillReceiveProps(nextProps) {
    const input = this.input
    if (nextProps.value !== this.state.value) {
      if (input === document.activeElement) {
        this.setState({ blurValue: String(nextProps.value).toUpperCase() })
      } else {
        this.setState({ value: String(nextProps.value).toUpperCase(), blurValue: !this.state.blurValue && String(nextProps.value).toUpperCase() })
      }
    }
  }

  componentWillUnmount() {
    this.unbindEventListeners()
  }

  getValueObjectWithLabel(value) {
    return {
      [this.props.label]: value
    }
  }

  handleBlur = () => {
    if (this.state.blurValue) {
      this.setState({ value: this.state.blurValue, blurValue: null })
    }
  }

  handleChange = (e) => {
    this.setUpdatedValue(e.target.value, e)
  }

  getArrowOffset() {
    return this.props.arrowOffset || DEFAULT_ARROW_OFFSET
  }

  handleKeyDown = (e) => {
    // In case `e.target.value` is a percentage remove the `%` character
    // and update accordingly with a percentage
    // https://github.com/casesandberg/react-color/issues/383
    const value = getNumberValue(e.target.value)
    if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
      const offset = this.getArrowOffset()
      const updatedValue = e.keyCode === UP_KEY_CODE ? value + offset : value - offset

      this.setUpdatedValue(updatedValue, e)
    }
  }

  setUpdatedValue(value, e) {
    const onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value
    this.props.onChange && this.props.onChange(onChangeValue, e)

    const isPercentage = getIsPercentage(e.target.value)
    this.setState({
      value: isPercentage ? getFormattedPercentage(value) : value
    })
  }

  handleDrag = (e) => {
    if (this.props.dragLabel) {
      const newValue = Math.round(this.props.value + e.movementX)
      if (newValue >= 0 && newValue <= this.props.dragMax) {
        this.props.onChange && this.props.onChange(this.getValueObjectWithLabel(newValue), e)
      }
    }
  }

  handleMouseDown = (e) => {
    if (this.props.dragLabel) {
      e.preventDefault()
      this.handleDrag(e)
      window.addEventListener('mousemove', this.handleDrag)
      window.addEventListener('mouseup', this.handleMouseUp)
    }
  }

  handleMouseUp = () => {
    this.unbindEventListeners()
  }

  unbindEventListeners = () => {
    window.removeEventListener('mousemove', this.handleDrag)
    window.removeEventListener('mouseup', this.handleMouseUp)
  }

  render() {
    const styles = reactCSS({
      'default': {
        wrap: {
          position: 'relative',
        },
      },
      'user-override': {
        wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
        input: this.props.style && this.props.style.input ? this.props.style.input : {},
        label: this.props.style && this.props.style.label ? this.props.style.label : {},
      },
      'dragLabel-true': {
        label: {
          cursor: 'ew-resize',
        },
      },
    }, {
      'user-override': true,
    }, this.props)

    return (
      <div style={ styles.wrap }>
        <input
          style={ styles.input }
          ref={ input => this.input = input }
          value={ this.state.value }
          onKeyDown={ this.handleKeyDown }
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          placeholder={ this.props.placeholder }
          spellCheck="false"
        />
        { this.props.label && !this.props.hideLabel ? (
          <span style={ styles.label } onMouseDown={ this.handleMouseDown }>
            { this.props.label }
          </span>
        ) : null }
      </div>
    )
  }
}

export default EditableInput
