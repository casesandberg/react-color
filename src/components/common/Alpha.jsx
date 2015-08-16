'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var interact = require('interact.js');

var Checkboard = require('../common/Checkboard');

class Alpha extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        alpha: {
          Absolute: '0 0 0 0',
          borderRadius: this.props.radius,
        },
        checkboard: {
          Absolute: '0 0 0 0',
          overflow: 'hidden',
        },
        gradient: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to right, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 0) 0%, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 1) 100%)',
          boxShadow: this.props.shadow,
          borderRadius: this.props.radius,
        },
        container: {
          position: 'relative',
          zIndex: '2',
          height: '100%',
          margin: '0 3px',
        },
        pointer: {
          zIndex: '2',
          position: 'absolute',
          left: this.props.rgb.a * 100 + '%',
        },
        slider: {
          width: '4px',
          borderRadius: '1px',
          height: '8px',
          boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
          background: '#fff',
          marginTop: '1px',
          transform: 'translateX(-2px)',
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
    var left = e.pageX - (container.getBoundingClientRect().left + window.pageXOffset);
    if (left >= 0 && left <= containerWidth) {
      var percent = Math.round(left * 100 / containerWidth) / 100;
      if (this.props.a !== percent) {
        this.props.onChange({ h: this.props.hsl.h, s: this.props.hsl.s, l: this.props.hsl.l, a: percent });
      }
    }
  }

  render() {
    var pointer = <div is="slider" />;

    if (this.props.pointer) {
      pointer = <this.props.pointer {...this.props} />;
    }

    return (
      <div is="alpha">
        <div is="checkboard">
          <Checkboard />
        </div>
        <div is="gradient" />
        <div is="container" ref="container" onMouseDown={ this.handleChange }>
          <div is="pointer" ref="pointer">
            { pointer }
          </div>
        </div>
      </div>
    );
  }

}

module.exports = Alpha;
