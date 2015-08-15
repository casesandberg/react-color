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
    var bottom = <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=reactcss&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>;
    return (
      <div is="body">
        <Container width={ 780 }>
          <Docs markdown={ documentation } primaryColor={ this.props.primaryColor } bottom={ bottom } />
        </Container>
      </div>
    );
  }
}

module.exports = HomeDocumentation;
