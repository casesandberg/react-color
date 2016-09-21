'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var isMobile = document.getElementById('root').clientWidth < 500;
      var styles = (0, _reactcss2.default)({
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
            paddingLeft: '267px',
            width: '513px'
          }
        },
        'preset-three': {
          left: {
            width: '410px',
            position: 'absolute',
            height: '100%'
          },
          main: {
            paddingLeft: '460px'
          }
        },

        'preset-four': {
          left: {
            width: '170px',
            position: 'absolute',
            height: '100%'
          },
          main: {
            paddingLeft: '210px'
          }
        },

        'mobile-default': {
          main: {
            padding: '0px'
          },
          left: {
            display: 'none'
          }
        },
        'mobile-one': {
          left: {
            paddingRight: '0px'
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
        },
        'mobile-four': {
          grid: {
            display: 'none'
          }
        }
      }, {
        'preset-default': this.props.preset === 'default',
        'preset-one': this.props.preset === 'one',
        'preset-two': this.props.preset === 'two',
        'preset-three': this.props.preset === 'three',
        'preset-four': this.props.preset === 'four',
        'mobile-default': this.props.preset === 'default' && isMobile,
        'mobile-one': this.props.preset === 'one' && isMobile,
        'mobile-two': this.props.preset === 'two' && isMobile,
        'mobile-three': this.props.preset === 'three' && isMobile,
        'mobile-four': this.props.preset === 'four' && isMobile
      });

      return _react2.default.createElement(
        'div',
        { style: styles.grid },
        _react2.default.createElement(
          'div',
          { style: styles.left },
          this.props.children[0]
        ),
        _react2.default.createElement(
          'div',
          { style: styles.main },
          this.props.children[1]
        )
      );
    }
  }]);

  return Grid;
}(_react2.default.Component);

Grid.defaultProps = {
  preset: 'default'
};

exports.default = Grid;