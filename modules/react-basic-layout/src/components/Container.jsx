'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Container extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        container: {
          maxWidth: this.props.width + 'px',
          padding: '0 20px',
          margin: '0 auto',
        },
      },
    };
  }

  render() {
    return <div is="container">{ this.props.children }</div>;
  }
}

Container.defaultProps = {
  width: 960,
};

module.exports = Container;
