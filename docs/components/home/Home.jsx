'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var HomeFeature = require('./HomeFeature');
var HomeDocumentation = require('./HomeDocumentation');

module.exports = class Home extends ReactCSS.Component {

  constructor() {
    super();

    this.state = {
      primaryColor: '#194D33',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        home: {
          fontFamily: 'Roboto',
        },
      },
    };
  }

  handleChange(hex) {
    this.setState({ primaryColor: '#' + hex });
  }

  render() {
    return (
      <div is="home">

        <style>{`
          html, body {
            background: #eee;
            overflow-x: hidden;
          }
          .flexbox-fix {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
          }
        `}</style>

        <HomeFeature onChange={ this.handleChange } />
        <HomeDocumentation primaryColor={ this.state.primaryColor } />
      </div>
    );
  }
};
