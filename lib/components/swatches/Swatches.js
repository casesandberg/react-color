'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatches = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _materialColors = require('material-colors');

var _materialColors2 = _interopRequireDefault(_materialColors);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

var _reactMaterialDesign = require('../../../modules/react-material-design');

var _SwatchesGroup = require('./SwatchesGroup');

var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swatches = exports.Swatches = function (_ReactCSS$Component) {
  _inherits(Swatches, _ReactCSS$Component);

  function Swatches() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Swatches);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Swatches)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
      _color2.default.isValidHex(data) && _this.props.onChange({
        hex: data,
        source: 'hex'
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Swatches, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            width: this.props.width,
            height: this.props.height
          },
          overflow: {
            height: this.props.height,
            overflowY: 'scroll'
          },
          body: {
            padding: '16px 0px 6px 16px'
          },

          clear: {
            clear: 'both'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var groups = [];
      if (this.props.colors) {
        for (var i = 0; i < this.props.colors.length; i++) {
          var group = this.props.colors[i];
          groups.push(_react2.default.createElement(_SwatchesGroup2.default, { key: group.toString(), group: group, active: this.props.hex, onClick: this.handleChange }));
        }
      }

      return _react2.default.createElement(
        'div',
        { style: this.styles().picker },
        _react2.default.createElement(
          _reactMaterialDesign.Raised,
          null,
          _react2.default.createElement(
            'div',
            { style: this.styles().overflow },
            _react2.default.createElement(
              'div',
              { style: this.styles().body, ref: 'body' },
              groups,
              _react2.default.createElement('div', { style: this.styles().clear })
            )
          )
        )
      );
    }
  }]);

  return Swatches;
}(_reactcss2.default.Component);

Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[_materialColors2.default.red['900'], _materialColors2.default.red['700'], _materialColors2.default.red['500'], _materialColors2.default.red['300'], _materialColors2.default.red['100']], [_materialColors2.default.pink['900'], _materialColors2.default.pink['700'], _materialColors2.default.pink['500'], _materialColors2.default.pink['300'], _materialColors2.default.pink['100']], [_materialColors2.default.purple['900'], _materialColors2.default.purple['700'], _materialColors2.default.purple['500'], _materialColors2.default.purple['300'], _materialColors2.default.purple['100']], [_materialColors2.default.deepPurple['900'], _materialColors2.default.deepPurple['700'], _materialColors2.default.deepPurple['500'], _materialColors2.default.deepPurple['300'], _materialColors2.default.deepPurple['100']], [_materialColors2.default.indigo['900'], _materialColors2.default.indigo['700'], _materialColors2.default.indigo['500'], _materialColors2.default.indigo['300'], _materialColors2.default.indigo['100']], [_materialColors2.default.blue['900'], _materialColors2.default.blue['700'], _materialColors2.default.blue['500'], _materialColors2.default.blue['300'], _materialColors2.default.blue['100']], [_materialColors2.default.lightBlue['900'], _materialColors2.default.lightBlue['700'], _materialColors2.default.lightBlue['500'], _materialColors2.default.lightBlue['300'], _materialColors2.default.lightBlue['100']], [_materialColors2.default.cyan['900'], _materialColors2.default.cyan['700'], _materialColors2.default.cyan['500'], _materialColors2.default.cyan['300'], _materialColors2.default.cyan['100']], [_materialColors2.default.teal['900'], _materialColors2.default.teal['700'], _materialColors2.default.teal['500'], _materialColors2.default.teal['300'], _materialColors2.default.teal['100']], ['#194D33', _materialColors2.default.green['700'], _materialColors2.default.green['500'], _materialColors2.default.green['300'], _materialColors2.default.green['100']], [_materialColors2.default.lightGreen['900'], _materialColors2.default.lightGreen['700'], _materialColors2.default.lightGreen['500'], _materialColors2.default.lightGreen['300'], _materialColors2.default.lightGreen['100']], [_materialColors2.default.lime['900'], _materialColors2.default.lime['700'], _materialColors2.default.lime['500'], _materialColors2.default.lime['300'], _materialColors2.default.lime['100']], [_materialColors2.default.yellow['900'], _materialColors2.default.yellow['700'], _materialColors2.default.yellow['500'], _materialColors2.default.yellow['300'], _materialColors2.default.yellow['100']], [_materialColors2.default.amber['900'], _materialColors2.default.amber['700'], _materialColors2.default.amber['500'], _materialColors2.default.amber['300'], _materialColors2.default.amber['100']], [_materialColors2.default.orange['900'], _materialColors2.default.orange['700'], _materialColors2.default.orange['500'], _materialColors2.default.orange['300'], _materialColors2.default.orange['100']], [_materialColors2.default.deepOrange['900'], _materialColors2.default.deepOrange['700'], _materialColors2.default.deepOrange['500'], _materialColors2.default.deepOrange['300'], _materialColors2.default.deepOrange['100']], [_materialColors2.default.brown['900'], _materialColors2.default.brown['700'], _materialColors2.default.brown['500'], _materialColors2.default.brown['300'], _materialColors2.default.brown['100']], [_materialColors2.default.blueGrey['900'], _materialColors2.default.blueGrey['700'], _materialColors2.default.blueGrey['500'], _materialColors2.default.blueGrey['300'], _materialColors2.default.blueGrey['100']]]
};

exports.default = (0, _common.ColorWrap)(Swatches);