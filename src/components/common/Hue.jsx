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
          left: (this.props.value * 100) / 360 + '%',
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
          top: -((this.props.value * 100) / 360) + 100 + '%',
        },
      },
    };
  }

  handleChange(e) {
    var container = React.findDOMNode(this.refs.container);
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var left = e.pageX - container.getBoundingClientRect().left;
    var top = e.pageY - container.getBoundingClientRect().top;

    if (this.props.direction === 'vertical') {
      if (top > 0 && top < containerHeight) {
        var percent = -(top * 100 / containerHeight) + 100;
        var h = (360 * percent / 100);
        if (this.props.value !== h) {
          this.props.onChange({ h: h });
        }
      }
    } else {
      if (left > 0 && left < containerWidth) {
        var percent = left * 100 / containerWidth;
        var h = (360 * percent / 100);
        if (this.props.value !== h) {
          this.props.onChange({ h: h });
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
          <div is="pointer" draggable onDrag={ this.handleChange }>
            { pointer }
          </div>
        </div>
      </div>
    );
  }

}

module.exports = Hue;
