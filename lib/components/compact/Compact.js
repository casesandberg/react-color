'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Compact = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _reactMaterialDesign = require('../../../modules/react-material-design');

var _common = require('../common');

var _CompactColor = require('./CompactColor');

var _CompactColor2 = _interopRequireDefault(_CompactColor);

var _CompactFields = require('./CompactFields');

var _CompactFields2 = _interopRequireDefault(_CompactFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compact = exports.Compact = function (_ReactCSS$Component) {
  _inherits(Compact, _ReactCSS$Component);

  function Compact() {
    _classCallCheck(this, Compact);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Compact).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Compact, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          Compact: {
            background: '#f6f6f6',
            radius: '4px'
          },
          compact: {
            paddingTop: '5px',
            paddingLeft: '5px',
            boxSizing: 'initial',
            width: '240px'
          },

          clear: {
            clear: 'both'
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      if (data.hex) {
        _color2.default.isValidHex(data.hex) && this.props.onChange(data.hex);
      } else {
        this.props.onChange(data);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var colors = [];
      if (this.props.colors) {
        for (var i = 0; i < this.props.colors.length; i++) {
          var color = this.props.colors[i];
          colors.push(_react2.default.createElement(_CompactColor2.default, { key: color, color: color, active: color.replace('#', '').toLowerCase() == this.props.hex, onClick: this.handleChange }));
        }
      }

      return _react2.default.createElement(
        _reactMaterialDesign.Raised,
        { is: 'Compact' },
        _react2.default.createElement(
          'div',
          { is: 'compact' },
          _react2.default.createElement(
            'div',
            { ref: 'colors' },
            colors,
            _react2.default.createElement('div', { is: 'clear' })
          ),
          _react2.default.createElement(_CompactFields2.default, _extends({}, this.props, { onChange: this.handleChange }))
        )
      );
    }
  }]);

  return Compact;
}(_reactcss2.default.Component);

Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']
};

exports.default = (0, _common.ColorWrap)(Compact);