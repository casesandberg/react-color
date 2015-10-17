
const React = require('react');
const TestUtils = require('react-addons-test-utils');
import chai from 'chai';
const expect = chai.expect;
require('testdom')('<html><body></body></html>');
import spies from 'chai-spies';
chai.use(spies);

export { React, TestUtils, expect, chai, spies };
