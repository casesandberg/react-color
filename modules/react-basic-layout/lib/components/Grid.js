'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_ReactCSS$Component) {
  _inherits(Grid, _ReactCSS$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).apply(this, arguments));
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
            right: '0px',
            top: '0px',
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
      return _react2.default.createElement(
        'div',
        { style: this.styles().grid },
        _react2.default.createElement(
          'div',
          { style: this.styles().left },
          this.props.children[0]
        ),
        _react2.default.createElement(
          'div',
          { style: this.styles().main },
          this.props.children[1]
        )
      );
    }
  }]);

  return Grid;
}(_reactcss2.default.Component);

Grid.defaultProps = {
  preset: 'default'
};

exports.default = Grid;