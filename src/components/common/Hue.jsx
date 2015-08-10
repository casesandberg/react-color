'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Hue extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        hue: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
          overflow: 'hidden',
          borderRadius: this.props.radius,
          boxShadow: this.props.shadow,
        },
        slider: {
          width: '4px',
          borderRadius: '1px',
          height: '8px',
          boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
          background: '#fff',
          zIndex: '2',
          position: 'absolute',
          left: (this.props.value * 100) / 360 + '%',
          top: '1px',

          // WebkitUserDrag: 'none'
        },
      },
    };
  }

  handleChange(e) {
    var container = React.findDOMNode(this.refs.container);
    var containerWidth = container.clientWidth;
    var left = e.pageX - container.getBoundingClientRect().left;
    if (left > 0 && left < containerWidth) {
      var percent = left * 100 / containerWidth;
      var h = (360 * percent / 100);
      if (this.props.value !== h) {
        this.props.onChange({ h: h });
      }
    }
  }

  render() {
    return (
      <div is="hue" ref="container" onMouseDown={ this.handleChange }>
        <div is="slider" draggable onDrag={ this.handleChange } />
      </div>
    );
  }

}

module.exports = Hue;
