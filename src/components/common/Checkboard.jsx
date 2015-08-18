'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var _checkboardCache = {};

function renderCheckboard(c1, c2, size) {
  if (typeof document == 'undefined') return null; // Dont Render On Server
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

function getCheckboard(c1, c2, size) {
  var key = c1 + ',' + c2 + ',' + size;

  if (_checkboardCache[key]) {
    return _checkboardCache[key];
  } else {
    var checkboard = renderCheckboard(c1, c2, size);
    _checkboardCache[key] = checkboard;
    return checkboard;
  }
}

class Checkboard extends ReactCSS.Component {
  classes() {
    var background = getCheckboard(this.props.white, this.props.grey, this.props.size);
    return {
      'default': {
        grid: {
          Absolute: '0 0 0 0',
          background: 'url(' + background + ') center left',
        },
      },
    };
  }

  render() {
    return (
      <div is="grid" ref="grid"></div>
    );
  }

}

Checkboard.defaultProps = {
  size: 8,
  white: '#fff',
  grey: '#e6e6e6',
};

module.exports = Checkboard;
