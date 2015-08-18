'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var Grid = (function (_ReactCSS$Component) {
  _inherits(Grid, _ReactCSS$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Grid, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          grid: {
            position: 'relative'
          }
        },
        'preset-default': {
          left: {
            position: 'absolute',
            width: '170px'
          },
          main: {
            paddingLeft: '190px'
          }
        },
        'preset-one': {
          left: {
            width: 'auto',
            position: 'relative',
            paddingRight: '260px'
          },
          main: {
            position: 'absolute',
            right: '0',
            top: '0',
            width: '225px'
          }
        },
        'preset-two': {
          left: {
            width: '220px',
            position: 'absolute'
          },
          main: {
            paddingLeft: '267px'
          }
        },
        'preset-three': {
          left: {
            width: '410px',
            position: 'absolute',
            height: '100%'
          },
          main: {
            paddingLeft: '455px'
          }
        },

        'mobile-default': {
          main: {
            padding: '0'
          },
          left: {
            display: 'none'
          }
        },
        'mobile-one': {
          left: {
            paddingRight: '0'
          },
          main: {
            display: 'none'
          }
        },
        'mobile-two': {
          grid: {
            position: 'relative',
            width: '100%'
          },
          left: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginLeft: '-20px'
          },
          main: {
            display: 'none'
          }
        },
        'mobile-three': {
          grid: {
            display: 'none'
          }
        }
      };
    }
  }, {
    key: 'styles',
    value: function styles() {
      return this.css({
        'mobile-default': this.props.preset === 'default' && document.getElementById('root').clientWidth < 500,
        'mobile-one': this.props.preset === 'one' && document.getElementById('root').clientWidth < 500,
        'mobile-two': this.props.preset === 'two' && document.getElementById('root').clientWidth < 500,
        'mobile-three': this.props.preset === 'three' && document.getElementById('root').clientWidth < 500
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().grid },
        React.createElement(
          'div',
          { style: this.styles().left },
          this.props.children[0]
        ),
        React.createElement(
          'div',
          { style: this.styles().main },
          this.props.children[1]
        )
      );
    }
  }]);

  return Grid;
})(ReactCSS.Component);

Grid.defaultProps = {
  preset: 'default'
};

module.exports = Grid;