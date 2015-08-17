'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var Checkboard = (function (_ReactCSS$Component) {
  _inherits(Checkboard, _ReactCSS$Component);

  function Checkboard() {
    _classCallCheck(this, Checkboard);

    _get(Object.getPrototypeOf(Checkboard.prototype), 'constructor', this).call(this);

    this.state = {
      children: []
    };
  }

  _createClass(Checkboard, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          grid: {
            Absolute: '0 0 0 0'
          },
          inside: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          },
          white: {
            width: this.props.size + 'px',
            height: this.props.size + 'px',
            background: '#fff',
            float: 'left'
          },
          grey: {
            width: this.props.size + 'px',
            height: this.props.size + 'px',
            background: '#e6e6e6',
            float: 'left'
          }
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var grid = React.findDOMNode(this.refs.grid);
      var inside = React.findDOMNode(this.refs.inside);
      var rows = Math.ceil(grid.clientHeight / this.props.size);
      var columns = Math.ceil(grid.clientWidth / this.props.size);

      if (columns % 2 == 0) {
        columns++;
      }

      inside.style.width = columns * this.props.size + 'px';

      var children = [];
      for (var i = 0; i < rows * columns; i++) {
        if (i % 2 == 0) {
          children.push(React.createElement('div', { key: i, style: this.styles().white }));
        } else {
          children.push(React.createElement('div', { key: i, style: this.styles().grey }));
        }
      }

      this.setState({ children: children });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().grid, ref: 'grid' },
        React.createElement(
          'div',
          { style: this.styles().inside, ref: 'inside' },
          this.state.children
        )
      );
    }
  }]);

  return Checkboard;
})(ReactCSS.Component);

Checkboard.defaultProps = {
  size: 8
};

module.exports = Checkboard;