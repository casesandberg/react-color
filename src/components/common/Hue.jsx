'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var interact = require('interact.js');

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
          borderRadius: this.props.radius,
          boxShadow: this.props.shadow,
        },
        container: {
          margin: '0 2px',
          position: 'relative',
          height: '100%',
        },
        pointer: {
          zIndex: '2',
          position: 'absolute',
          left: (this.props.hsl.h * 100) / 360 + '%',
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
          background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
        },
        pointer: {
          left: '0',
          top: -((this.props.hsl.h * 100) / 360) + 100 + '%',
        },
      },
    };
  }

  componentDidMount() {
    interact(React.findDOMNode(this.refs.pointer)).styleCursor(false).draggable({
      onmove: (function(e) {
        this.handleChange(e);
      }).bind(this),
    });
  }

  handleChange(e) {
    var container = React.findDOMNode(this.refs.container);
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var left = e.pageX - (container.getBoundingClientRect().left + window.pageXOffset);
    var top = e.pageY - (container.getBoundingClientRect().top + window.pageYOffset);

    if (this.props.direction === 'vertical') {
      if (top > 0 && top < containerHeight) {
        var percent = -(top * 100 / containerHeight) + 100;
        var h = (360 * percent / 100);
        if (this.props.hsl.h !== h) {
          this.props.onChange({ h: h, s: this.props.hsl.s, l: this.props.hsl.l });
        }
      }
    } else {
      if (left > 0 && left < containerWidth) {
        var percent = left * 100 / containerWidth;
        var h = (360 * percent / 100);
        if (this.props.hsl.h !== h) {
          this.props.onChange({ h: h, s: this.props.hsl.s, l: this.props.hsl.l });
        }
      }
    }
  }

  render() {
    var pointer = <div is="slider" />;

    if (this.props.pointer) {
      pointer = <this.props.pointer {...this.props} />;
    }

    return (
      <div is="hue">
        <div is="container" ref="container" onMouseDown={ this.handleChange }>
          <div is="pointer" ref="pointer">
            { pointer }
          </div>
        </div>
      </div>
    );
  }

}

module.exports = Hue;
