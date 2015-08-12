'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var ColorPicker = require('react-color');

var { Container, Grid } = require('../layout');
var { Raised } = require('react-material-design');

class HomeFeature extends ReactCSS.Component {

  classes() {
    return {
      'default': {
      },
    };
  }

  render() {
    return (
      <div is="feature">
        <Container>
          feature
        </Container>
      </div>
    );
  }
}

module.exports = HomeFeature;
