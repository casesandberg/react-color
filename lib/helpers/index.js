'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkboard = require('./checkboard');

Object.keys(_checkboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkboard[key];
    }
  });
});

var _color = require('./color');

Object.keys(_color).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _color[key];
    }
  });
});