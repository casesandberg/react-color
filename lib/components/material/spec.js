'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global test, test, expect */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _color = require('../../helpers/color');

var _Material = require('./Material');

var _Material2 = _interopRequireDefault(_Material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Material renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Material2.default, _color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Material renders custom styles correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Material2.default, _extends({}, _color.red, { styles: { default: { wrap: { boxShadow: '0 0 10px red' } } } }))).toJSON();
  expect(tree.props.style.boxShadow).toBe('0 0 10px red');
});