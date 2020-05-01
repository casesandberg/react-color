import React, { Component, PureComponent } from 'react'
import reactCSS from 'reactcss'
import * as lightness from '../../helpers/lightness'

export class Lightness extends (PureComponent || Component) {
  componentWillUnmount() {
    this.unbindEventListeners()
  }

  handleChange = (e) => {
    const change = lightness.calculateChange(e, this.props.direction, this.props.hsl, this.container)
    change && typeof this.props.onChange === 'function' && this.props.onChange(change, e)
  }

  handleMouseDown = (e) => {
    this.handleChange(e)
    window.addEventListener('mousemove', this.handleChange)
    window.addEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseUp = () => {
    this.unbindEventListeners()
  }

  unbindEventListeners() {
    window.removeEventListener('mousemove', this.handleChange)
    window.removeEventListener('mouseup', this.handleMouseUp)
  }

  render() {
    const { direction = 'horizontal' } = this.props    
    const styles = reactCSS({
      'default': {
        hue: {
          absolute: '0px 0px 0px 0px',
          borderRadius: this.props.radius,
          boxShadow: this.props.shadow,
        },
        container: {
          padding: '0 2px',
          position: 'relative',
          height: '100%',
          borderRadius: this.props.radius,
        },
        pointer: {
          position: 'absolute',
          left: `${ this.props.hsl.l }%`,
        },
        slider: {
          marginTop: '1px',
          width: '4px',
          borderRadius: '1px',
          height: '8px',
          boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
          background: '#fff',
          transform: 'translateX(-2px)',
        },
      },
      'vertical': {
        pointer: {
          left: '0px',
          top: `${ 100 - this.props.hsl.l }%`,
        },
      },
    }, { vertical: direction === 'vertical' })

    return (
      <div style={ styles.hue }>
        <div
          className={ `lightness-${ direction }` }
          style={ styles.container }
          ref={ container => this.container = container }
          onMouseDown={ this.handleMouseDown }
          onTouchMove={ this.handleChange }
          onTouchStart={ this.handleChange }
        >
          <style>{ `
            .lightness-horizontal {
              background: linear-gradient(to right,hsl(0, 100%,0%), hsl(${ Math.round(this.props.hsl.h) }, 100%, 50%), hsl(360, 100%,100%));
              background: -webkit-linear-gradient(to right,hsl(0, 100%,0%), hsl(${ Math.round(this.props.hsl.h) }, 100%, 50%), hsl(360, 100%,100%));
            }

            .lightness-vertical {
              background: linear-gradient(to top, hsl(0, 100%,0%), hsl(${ Math.round(this.props.hsl.h) }, 100%, 50%), hsl(360, 100%,100%));
              background: -webkit-linear-gradient(to top,hsl(0, 100%,0%), hsl(${ Math.round(this.props.hsl.h) }, 100%, 50%), hsl(360, 100%,100%));
            }
          ` }</style>
          <div style={ styles.pointer }>
            { this.props.pointer ? (
              <this.props.pointer { ...this.props } />
            ) : (
              <div style={ styles.slider } />
            ) }
          </div>
        </div>
      </div>
    )
  }
}

export default Lightness
