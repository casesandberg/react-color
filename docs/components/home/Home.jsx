'use strict';

var React = require('react');

var HomeFeature = require('./HomeFeature');
var HomeDocumentation = require('./HomeDocumentation');

module.exports = class Home extends React.Component {

  render() {
    return (
      <div>
        <HomeFeature />
        <HomeDocumentation />
      </div>
    );
  }
};
