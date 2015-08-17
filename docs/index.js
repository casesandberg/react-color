'use strict';

var React = require('react');

var Home = require('./components/home/Home.jsx');

// var html = React.renderToString(React.createElement(Home));
// console.log(html);

React.render(
  React.createElement(Home),
  document.getElementById('root')
);
