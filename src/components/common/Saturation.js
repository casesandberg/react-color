import React from 'react'
import reactCSS from 'reactcss'
import throttle from 'lodash/throttle'
import shallowCompare from 'react-addons-shallow-compare'

export class Saturation extends React.Component {
  constructor(props) {
    super(props)

    this.throttle = throttle((fn, data) => {
      fn(data)
    }, 50)
  }

  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1]);

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
    let left = x - (container.getBoundingClientRect().left + (inIFrame ? 0 : window.pageXOffset))
    let top = y - (container.getBoundingClientRect().top + (inIFrame ? 0 : window.pageYOffset))

    if (left < 0) {
      left = 0
    } else if (left > containerWidth) {
      left = containerWidth
    } else if (top < 0) {
      top = 0
    } else if (top > containerHeight) {
      top = containerHeight
    }

    const saturation = left * 100 / containerWidth
    const bright = -(top * 100 / containerHeight) + 100

    this.throttle(this.props.onChange, {
      h: this.props.hsl.h,
      s: saturation,
      v: bright,
      a: this.props.hsl.a,
      source: 'rgb',
    })
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
        color: {
          absolute: '0px 0px 0px 0px',
          background: `hsl(${ this.props.hsl.h },100%, 50%)`,
          borderRadius: this.props.radius,
        },
        white: {
          absolute: '0px 0px 0px 0px',
          background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))',
        },
        black: {
          absolute: '0px 0px 0px 0px',
          background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
          boxShadow: this.props.shadow,
        },
        pointer: {
          position: 'absolute',
          top: `${ -(this.props.hsv.v * 100) + 100 }%`,
          left: `${ this.props.hsv.s * 100 }%`,
          cursor: 'default',
        },
        circle: {
          width: '4px',
          height: '4px',
          boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,
          borderRadius: '50%',
          cursor: 'hand',
          transform: 'translate(-2px, -2px)',
        },
      },
    })

    return (
      <div
        style={ styles.color }
        ref="container"
        onMouseDown={ this.handleMouseDown }
        onTouchMove={ this.handleChange }
        onTouchStart={ this.handleChange }
      >
        <div style={ styles.white }>
          <div style={ styles.black } />
          <div style={ styles.pointer }>
            { this.props.pointer ? (
              <this.props.pointer { ...this.props } />
            ) : (
              <div style={ styles.circle } />
            ) }
          </div>
        </div>
      </div>
    )
  }
}

export default Saturation
