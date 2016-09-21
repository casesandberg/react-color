'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class EditableInput extends React.Component {
  constructor(props: any) {
    super()

    this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase(),
    }
  }

  componentWillReceiveProps(nextProps: any) {
    const input = this.refs.input
    if (nextProps.value !== this.state.value) {
      if (input === document.activeElement) {
        this.setState({ blurValue: String(nextProps.value).toUpperCase() })
      } else {
        this.setState({ value: String(nextProps.value).toUpperCase() })
      }
    }
  }

  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1]);

  componentWillUnmount() {
    this.unbindEventListeners()
  }

  handleBlur = () => {
    if (this.state.blurValue) {
      this.setState({ value: this.state.blurValue, blurValue: null })
    }
  }

  handleChange = (e: any) => {
    if (!!this.props.label) {
      this.props.onChange({ [this.props.label]: e.target.value })
    } else {
      this.props.onChange(e.target.value)
    }

    this.setState({ value: e.target.value })
  }

  handleKeyDown = (e: any) => {
    const number = Number(e.target.value)
    if (number) {
      const amount = this.props.arrowOffset || 1

      // Up
      if (e.keyCode === 38) {
        if (this.props.label !== null) {
          this.props.onChange({ [this.props.label]: number + amount })
        } else {
          this.props.onChange(number + amount)
        }

        this.setState({ value: number + amount })
      }

      // Down
      if (e.keyCode === 40) {
        if (this.props.label !== null) {
          this.props.onChange({ [this.props.label]: number - amount })
        } else {
          this.props.onChange(number - amount)
        }

        this.setState({ value: number - amount })
      }
    }
  }

  handleDrag = (e: any) => {
    if (this.props.dragLabel) {
      const newValue = Math.round(this.props.value + e.movementX)
      if (newValue >= 0 && newValue <= this.props.dragMax) {
        this.props.onChange({ [this.props.label]: newValue })
      }
    }
  }

  handleMouseDown = (e: any) => {
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
    window.removeEventListener('mousemove', this.handleChange)
    window.removeEventListener('mouseup', this.handleMouseUp)
  }

  render(): any {
    const styles = reactCSS({
      'user-override': {
        wrap: this.props.style && this.props.style.wrap
          ? this.props.style.wrap
          : { position: 'relative' },
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
      <div style={ styles.wrap } ref="container">
        <input
          style={ styles.input }
          ref="input"
          value={ this.state.value }
          onKeyDown={ this.handleKeyDown }
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          placeholder={ this.props.placeholder }
        />
        { this.props.label ? (
          <span style={ styles.label } ref="label" onMouseDown={ this.handleMouseDown }>
            { this.props.label }
          </span>
        ) : null }
      </div>
    )
  }
}

export default EditableInput
