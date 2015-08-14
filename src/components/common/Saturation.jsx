'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');
var _ = require('lodash');

class Saturation extends ReactCSS.Component {

  constructor(props) {
    super();

    this.state = props;

    this.throttle = _.throttle(function(fn, data) {
      fn(data);
    }, 50);

    this.handleChange = this.handleChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  classes() {
    var hsv = tinycolor({ h: this.state.h, s: this.state.s, l: this.state.l }).toHsv();

    return {
      'default': {
        color: {
          Absolute: '0 0 0 0',
          background: 'hsl(' + this.state.h + ',100%, 50%)',
          borderRadius: this.state.radius,
        },
        white: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))',
        },
        black: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
          boxShadow: this.state.shadow,
        },
        pointer: {
          position: 'absolute',
          top: -(hsv.v * 100) + 100 + '%',
          left: hsv.s * 100 + '%',
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

  componentWillReceiveProps(nextProps) {
    var pointer = React.findDOMNode(this.refs.pointer);

    if (this.state.dragging) {
      var pointer = React.findDOMNode(this.refs.pointer);
      var hsv = tinycolor({ h: nextProps.h, s: nextProps.s, l: nextProps.l }).toHsv();
      pointer.style.top = -(hsv.v * 100) + 100 + '%';
      pointer.style.left = hsv.s * 100 + '%';

      var next = {};
      for (var propName in nextProps) {
        next[propName] = nextProps[propName];
      }

      next.altState = false;
      next.dragging = false;
      this.setState({ altState: next });
    } else {
      this.setState(nextProps);
    }
  }

  handleChange(e) {
    var container = React.findDOMNode(this.refs.container);
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var left = e.pageX - container.getBoundingClientRect().left;
    var top = e.pageY - container.getBoundingClientRect().top;
    if (left > 0 && top > 0 && left < containerWidth && top < containerHeight) {
      var saturation = left * 100 / containerWidth;
      var bright = -(top * 100 / containerHeight) + 100;
      var computed = tinycolor({ h: this.state.h, s: saturation, v: bright }).toHsl();
      if (this.state.h !== computed.h || this.state.s !== computed.s) {
        this.throttle(this.state.onChange, { l: Math.round(computed.l * 100), s: Math.round(computed.s * 100) });
      }
    }
  }

  handleStart() {
    this.setState({ dragging: true });
  }

  handleEnd() {
    if (this.state.altState) {
      this.setState(this.state.altState);
    } else {
      this.setState({ dragging: false });
    }
  }

  render() {
    var pointer = <div is="circle" />;

    if (this.state.pointer) {
      pointer = <this.state.pointer {...this.state} />;
    }

    return (
      <div is="color" ref="container" onMouseDown={ this.handleChange }>
        <div is="white">
          <div is="black" />
          <div is="pointer" ref="pointer" draggable onDrag={ this.handleChange } onDragStart={ this.handleStart } onDragEnd={ this.handleEnd } >
            { pointer }
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Saturation;
