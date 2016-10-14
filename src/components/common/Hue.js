import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class Hue extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  componentWillUnmount() {
    this.unbindEventListeners()
  }

  handleChange = (e, skip) => {
    !skip && e.preventDefault()
    const container = this.refs.container
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight
    const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX
    const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
    const inIFrame = window.self !== window.top || window.document !== container.ownerDocument
    const left = x - (container.getBoundingClientRect().left + (inIFrame ? 0 : window.pageXOffset))
    const top = y - (container.getBoundingClientRect().top + (inIFrame ? 0 : window.pageYOffset))

    if (this.props.direction === 'vertical') {
      let h
      if (top < 0) {
        h = 359
      } else if (top > containerHeight) {
        h = 0
      } else {
        const percent = -(top * 100 / containerHeight) + 100
        h = (360 * percent / 100)
      }

      if (this.props.hsl.h !== h) {
        this.props.onChange({
          h,
          s: this.props.hsl.s,
          l: this.props.hsl.l,
          a: this.props.hsl.a,
          source: 'rgb',
        })
      }
    } else {
      let h
      if (left < 0) {
        h = 0
      } else if (left > containerWidth) {
        h = 359
      } else {
        const percent = left * 100 / containerWidth
        h = (360 * percent / 100)
      }

      if (this.props.hsl.h !== h) {
        this.props.onChange({
          h,
          s: this.props.hsl.s,
          l: this.props.hsl.l,
          a: this.props.hsl.a,
          source: 'rgb',
        })
      }
    }
  }

  handleMouseDown = (e) => {
    this.handleChange(e, true)
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
    const styles = reactCSS({
      'default': {
        hue: {
          absolute: '0px 0px 0px 0px',
          background: `linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%,
            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)`,
          borderRadius: this.props.radius,
          boxShadow: this.props.shadow,
        },
        container: {
          margin: '0 2px',
          position: 'relative',
          height: '100%',
        },
        pointer: {
          position: 'absolute',
          left: `${ (this.props.hsl.h * 100) / 360 }%`,
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
      'direction-vertical': {
        hue: {
          background: `linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)`,
        },
        pointer: {
          left: '0px',
          top: `${ -((this.props.hsl.h * 100) / 360) + 100 }%`,
        },
      },
    }, this.props)

    return (
      <div style={ styles.hue }>
        <div
          style={ styles.container }
          ref="container"
          onMouseDown={ this.handleMouseDown }
          onTouchMove={ this.handleChange }
          onTouchStart={ this.handleChange }
        >
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

export default Hue
