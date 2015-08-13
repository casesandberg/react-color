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
        body: {
          paddingTop: '50px',
          paddingBottom: '50px',
        },
      },
    };
  }

  render() {
    return (
      <div is="body">
        <Container width={ 780 }>
          <Docs markdown={ documentation } />
        </Container>
      </div>
    );
  }
}

module.exports = HomeDocumentation;
