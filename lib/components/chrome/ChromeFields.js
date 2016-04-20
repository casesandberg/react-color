'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromeFields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChromeFields = exports.ChromeFields = function (_ReactCSS$Component) {
  _inherits(ChromeFields, _ReactCSS$Component);

  function ChromeFields() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, ChromeFields);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ChromeFields)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.state = {
      view: ''
    }, _this.handleChange = function (data) {
      _this.props.onChange(data);
    }, _this.toggleViews = function () {
      if (_this.state.view === 'hex') {
        _this.setState({ view: 'rgb' });
      } else if (_this.state.view === 'rgb') {
        _this.setState({ view: 'hsl' });
      } else if (_this.state.view === 'hsl') {
        if (_this.props.hsl.a === 1) {
          _this.setState({ view: 'hex' });
        } else {
          _this.setState({ view: 'rgb' });
        }
      }
    }, _this.handleChange = function (data) {
      if (data.hex) {
        _color2.default.isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: 'hex'
        });
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        });
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }

        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: 'rgb'
        });
      } else if (data.h || data.s || data.l) {

        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: data.s && data.s.replace('%', '') || _this.props.hsl.s,
          l: data.l && data.l.replace('%', '') || _this.props.hsl.l,
          source: 'hsl'
        });
      }
    }, _this.showHighlight = function () {
      _this.refs.iconHighlight.style.display = 'block';
    }, _this.hideHighlight = function () {
      _this.refs.iconHighlight.style.display = 'none';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChromeFields, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          wrap: {
            paddingTop: '16px',
            display: 'flex'
          },
          fields: {
            flex: '1',
            display: 'flex',
            marginLeft: '-6px'
          },
          field: {
            paddingLeft: '6px',
            width: '100%'
          },
          toggle: {
            width: '32px',
            textAlign: 'right',
            position: 'relative'
          },
          icon: {
            marginRight: '-4px',
            marginTop: '12px',
            cursor: 'pointer',
            position: 'relative',
            zIndex: '2'
          },
          iconHighlight: {
            position: 'absolute',
            width: '24px',
            height: '28px',
            background: '#eee',
            borderRadius: '4px',
            top: '10px',
            left: '12px',
            display: 'none'
          },
          Input: {
            style: {
              input: {
                fontSize: '11px',
                color: '#333',
                width: '100%',
                borderRadius: '2px',
                border: 'none',
                boxShadow: 'inset 0px 0px 0px 1px #dadada',
                height: '21px',
                textAlign: 'center'
              },
              label: {
                textTransform: 'uppercase',
                fontSize: '11px',
                lineHeight: '11px',
                color: '#969696',
                textAlign: 'center',
                display: 'block',
                marginTop: '12px'
              }
            }
          }
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
        this.setState({ view: 'hex' });
      } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var fields;
      if (this.state.view === 'hex') {
        fields = _react2.default.createElement(
          'div',
          { style: this.styles().fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: this.styles().field },
            _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange }))
          )
        );
      } else if (this.state.view === 'rgb') {
        fields = _react2.default.createElement(
          'div',
          { style: this.styles().fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: this.styles().field },
            _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange }))
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().field },
            _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange }))
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().field },
            _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange }))
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().field },
            _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'a', value: this.props.rgb.a, arrowOffset: .01, onChange: this.handleChange }))
          )
        );
      } else if (this.state.view === 'hsl') {
        fields = _react2.default.createElement(
          'div',
          { style: this.styles().fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: this.styles().field },
            _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'h', value: Math.round(this.props.hsl.h), onChange: this.handleChange }))
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().field },
            _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 's', value: Math.round(this.props.hsl.s * 100) + '%', onChange: this.handleChange }))
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().field },
            _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'l', value: Math.round(this.props.hsl.l * 100) + '%', onChange: this.handleChange }))
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().field },
            _react2.default.createElement(_common.EditableInput, _extends({}, this.styles().Input, { label: 'a', value: this.props.hsl.a, arrowOffset: .01, onChange: this.handleChange }))
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { style: this.styles().wrap, className: 'flexbox-fix' },
        fields,
        _react2.default.createElement(
          'div',
          { style: this.styles().toggle },
          _react2.default.createElement(
            'div',
            { style: this.styles().icon, onClick: this.toggleViews, ref: 'icon' },
            _react2.default.createElement(
              'svg',
              { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24', onMouseOver: this.showHighlight, onMouseEnter: this.showHighlight, onMouseOut: this.hideHighlight },
              _react2.default.createElement('path', { fill: '#333', d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
            )
          ),
          _react2.default.createElement('div', { style: this.styles().iconHighlight, ref: 'iconHighlight' })
        )
      );
    }
  }]);

  return ChromeFields;
}(_reactcss2.default.Component);

exports.default = ChromeFields;