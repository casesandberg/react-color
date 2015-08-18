'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Move extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        outer: {
          opacity: this.props.inStartOpacity,
          transform: this.props.inStartTransform,
          transition: this.props.inStartTransition,
        },
      },
    };
  }

  componentDidMount() {
    var animate = React.findDOMNode(this.refs.outer);

    setTimeout((function() {
      animate.style.opacity = this.props.inEndOpacity;
      animate.style.transform = this.props.inEndTransform;
      animate.style.transition = this.props.inEndTransition;
    }).bind(this), this.props.inDelay);
  }

  render() {
    return (
      <div is="outer" ref="outer" className="foobarbaz">{ this.props.children }</div>
    );
  }
}

Move.defaultProps = {
  inStartOpacity: '0',
  inStartTransform: '',
  inStartTransition: 'all 400ms cubic-bezier(.55,0,.1,1)',
  inEndOpacity: '1',
  inEndTransform: '',
  inEndTransition: 'all 400ms cubic-bezier(.55,0,.1,1)',
  inDelay: 0,
};

module.exports = Move;
