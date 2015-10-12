'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./components/home/Home');

// var html = React.renderToString(React.createElement(Home));
// console.log(html);

if (typeof document !== 'undefined') {
  ReactDOM.render(
    React.createElement(Home),
    document.getElementById('root')
  );
}

module.exports = Home;
