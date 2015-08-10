'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

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
          background: '#eee',
          overflow: 'hidden',
          borderRadius: this.props.radius,
        },
        gradient: {
          Absolute: '0 0 0 0',
          background: 'linear-gradient(to right, hsla(' + this.props.h + ', ' + this.props.s + '%, ' + this.props.l + '%, 0) 0%, hsla(' + this.props.h + ', ' + this.props.s + '%, ' + this.props.l + '%, 1) 100%)',
          boxShadow: this.props.shadow,
          borderRadius: this.props.radius,
        },
        slider: {
          width: '4px',
          borderRadius: '1px',
          height: '8px',
          boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
          background: '#fff',
          zIndex: '2',
          position: 'absolute',
          left: this.props.a + '%',
          top: '1px',
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
      this.props.onChange({ a: percent });
    }
  }

  render() {
    return (
      <div is="alhpa" ref="container" onClick={ this.handleChange }>
        <div is="gradient" />
        <div is="slider" draggable onDrag={ this.handleChange }/>
      </div>
    );
  }

}

module.exports = Alpha;
