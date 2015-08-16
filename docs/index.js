'use strict';

var React = require('react');
// require('../node_modules/normalize.css/normalize.css');

var Home = require('./components/home/Home.jsx');

var html = React.renderToString(React.createElement(Home));
console.log(html);

if (typeof document !== 'undefined') {
  React.render(
    React.createElement(Home),
    document.getElementById('root')
  );
}

module.exports = Home;
