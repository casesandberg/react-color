'use strict';

import React from 'react';
import reactCSS from 'reactcss';

export class Move extends React.Component {

  componentDidMount() {
    var animate = this.refs.outer;

    setTimeout((function() {
      animate.style.opacity = this.props.inEndOpacity;
      animate.style.transform = this.props.inEndTransform;
      animate.style.transition = this.props.inEndTransition;
    }).bind(this), this.props.inDelay);
  }

  render() {

    const styles = reactCSS({
      'default': {
        outer: {
          opacity: this.props.inStartOpacity,
          transform: this.props.inStartTransform,
          transition: this.props.inStartTransition,
        },
      },
    });

    return (
      <div style={ styles.outer } ref="outer" className="foobarbaz">{ this.props.children }</div>
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

export default Move;
