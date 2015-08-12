'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Docs extends ReactCSS.Component {

  classes() {
    return {
      'default': {
      },
    };
  }

  render() {
    return <div is="docs">docs</div>;
  }
}

module.exports = Docs;
