'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var HomeFeature = require('./HomeFeature');
var HomeDocumentation = require('./HomeDocumentation');

module.exports = class Home extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        home: {
          fontFamily: 'Roboto',
        },
      },
    };
  }

  render() {
    return (
      <div is="home">
        <HomeFeature />
        <HomeDocumentation />
      </div>
    );
  }
};
