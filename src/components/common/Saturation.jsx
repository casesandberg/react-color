'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var _ = require('lodash');
var interact = require('interact.js');

class Saturation extends ReactCSS.Component {

  constructor(props) {
    super();

    this.throttle = _.throttle(function(fn, data) {
      fn(data);
    }, 50);

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        color: {
          Absolute: '0 0 0 0',
          background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
          borderRadius: this.props.radius,
        },
        white: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))',
        },
        black: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
          boxShadow: this.props.shadow,
        },
        pointer: {
          position: 'absolute',
          top: -(this.props.hsv.v * 100) + 100 + '%',
          left: this.props.hsv.s * 100 + '%',
        },
        circle: {
          width: '4px',
          height: '4px',
          boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4)',
          borderRadius: '50%',
          cursor: 'hand',
          transform: 'translate(-2px, -2px)',
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
    if (left > 0 && top > 0 && left < containerWidth && top < containerHeight) {
      var saturation = left * 100 / containerWidth;
      var bright = -(top * 100 / containerHeight) + 100;

      if (saturation < 1) {
        saturation = 0;
      }

      if (bright < 1) {
        bright = 0;
      }

      this.throttle(this.props.onChange, { h: this.props.hsl.h, s: saturation, v: bright });
    }
  }

  render() {
    var pointer = <div is="circle" />;

    if (this.props.pointer) {
      pointer = <this.props.pointer {...this.props} />;
    }

    return (
      <div is="color" ref="container" onMouseDown={ this.handleChange }>
        <div is="white">
          <div is="black" />
          <div is="pointer" ref="pointer">
            { pointer }
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Saturation;
