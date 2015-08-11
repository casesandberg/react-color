'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

class Saturation extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    var hsv = tinycolor({ h: this.props.h, s: this.props.s, l: this.props.l }).toHsv();

    return {
      'default': {
        color: {
          Absolute: '0 0 0 0',
          background: 'hsl(' + this.props.h + ',100%, 50%)',
          overflow: 'hidden',
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
        circle: {
          position: 'absolute',
          top: -(hsv.v * 100) + 100 + '%',
          left: hsv.s * 100 + '%',
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

  // componentDidMount() {
  //   var circle = React.findDOMNode(this.refs.circle);
  //   var hsv = tinycolor({ h: this.props.h, s: this.props.s, l: this.props.l }).toHsv();
  //   circle.style.top = -(hsv.v * 100) + 100 + '%';
  //   circle.style.left = hsv.s * 100 + '%';
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   var circle = React.findDOMNode(this.refs.circle);
  //   var hsv = tinycolor({ h: nextProps.h, s: nextProps.s, l: nextProps.l }).toHsv();
  //   circle.style.top = -(hsv.v * 100) + 100 + '%';
  //   circle.style.left = hsv.s * 100 + '%';
  // }

  handleChange(e) {
    var container = React.findDOMNode(this.refs.container);

    // var circle = React.findDOMNode(this.refs.circle);
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var left = e.pageX - container.getBoundingClientRect().left;
    var top = e.pageY - container.getBoundingClientRect().top;
    if (left > 0 && top > 0 && left < containerWidth && top < containerHeight) {
      // circle.style.top = top + 'px';
      // circle.style.left = left + 'px';
      var saturation = left * 100 / containerWidth;
      var bright = -(top * 100 / containerHeight) + 100;
      var computed = tinycolor({ h: this.props.h, s: saturation, v: bright }).toHsl();
      if (this.props.h !== computed.h || this.props.s !== computed.s) {
        this.props.onChange({ l: computed.l * 100, s: computed.s * 100 });
      }
    }
  }

  render() {
    return (
      <div is="color" ref="container" onMouseDown={ this.handleChange }>
        <div is="white">
          <div is="black" />
          <div is="circle" ref="circle" draggable onDrag={ this.handleChange } />
        </div>
      </div>
    );
  }

}

module.exports = Saturation;
