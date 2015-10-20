
const React = require('react');
const TestUtils = require('react-addons-test-utils');
import chai from 'chai';
const expect = chai.expect;
require('testdom')('<html><body></body></html>');
import spies from 'chai-spies';
chai.use(spies);

let defaultProps = {
  hex: '194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1,
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 1,
  },
  rgb: {
    r: 25,
    g: 77,
    b: 51,
    a: 1,
  },
};

export { React, TestUtils, expect, chai, spies, defaultProps };
