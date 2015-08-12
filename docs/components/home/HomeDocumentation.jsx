'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var { Container, Grid } = require('react-basic-layout');
var { Raised } = require('react-material-design');
var Docs = require('react-docs');

var documentation = require('../../documentation');

class HomeDocumentation extends ReactCSS.Component {

  classes() {
    return {
      'default': {
      },
    };
  }

  render() {
    return (
      <div is="body">
        <Container>
          Body
        </Container>
      </div>
    );
  }
}

module.exports = HomeDocumentation;
