'use strict';

var React = require('react');

var Home = require('./components/home/Home.jsx');

// var html = React.renderToString(React.createElement(Home));
// console.log(html);

if (typeof document !== 'undefined') {
  React.render(
    React.createElement(Home),
    document.getElementById('root')
  );
}

module.exports = Home;
