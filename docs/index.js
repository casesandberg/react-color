'use strict';

var React = require('react');
require('../node_modules/normalize.css/normalize.css');

var Home = require('./components/home/Home');

React.render(
  React.createElement(Home),
  document.getElementById('root')
);
