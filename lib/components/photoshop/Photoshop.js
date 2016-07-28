'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photoshop = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

var _PhotoshopFields = require('./PhotoshopFields');

var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

var _PhotoshopPointerCircle = require('./PhotoshopPointerCircle');

var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

var _PhotoshopPointer = require('./PhotoshopPointer');

var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photoshop = exports.Photoshop = function (_ReactCSS$Component) {
  _inherits(Photoshop, _ReactCSS$Component);

  function Photoshop(props) {
    _classCallCheck(this, Photoshop);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Photoshop).call(this));

    _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]);

    _this.handleChange = function (data) {
      _this.props.onChange(data);
    };

    _this.handleAccept = function () {
      _this.props.onAccept && _this.props.onAccept();
    };

    _this.handleCancel = function () {
      _this.props.onCancel && _this.props.onCancel();
    };

    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }

  _createClass(Photoshop, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            background: '#DCDCDC',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
            boxSizing: 'initial',
            width: '513px'
          },
          head: {
            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
            borderBottom: '1px solid #B1B1B1',
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
            height: '23px',
            lineHeight: '24px',
            borderRadius: '4px 4px 0 0',
            fontSize: '13px',
            color: '#4D4D4D',
            textAlign: 'center'
          },
          body: {
            padding: '15px 15px 0',
            display: 'flex'
          },
          saturation: {
            width: '256px',
            height: '256px',
            position: 'relative',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0',
            overflow: 'hidden'
          },
          hue: {
            position: 'relative',
            height: '256px',
            width: '19px',
            marginLeft: '10px',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0'
          },
          Hue: {
            direction: 'vertical'
          },
          controls: {
            width: '180px',
            marginLeft: '10px'
          },

          top: {
            display: 'flex'
          },
          previews: {
            width: '60px'
          },
          swatches: {
            border: '1px solid #B3B3B3',
            borderBottom: '1px solid #F0F0F0',
            marginBottom: '2px',
            marginTop: '1px'
          },
          new: {
            height: '34px',
            background: 'rgb(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ')',
            boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
          },
          current: {
            height: '34px',
            background: '#' + this.state.currentColor,
            boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
          },
          label: {
            fontSize: '14px',
            color: '#000',
            textAlign: 'center'
          },
          actions: {
            flex: '1',
            marginLeft: '20px'
          },
          button: {
            backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
            border: '1px solid #878787',
            borderRadius: '2px',
            height: '20px',
            boxShadow: '0 1px 0 0 #EAEAEA',
            fontSize: '14px',
            color: '#000',
            lineHeight: '20px',
            textAlign: 'center',
            marginBottom: '10px'
          },
          acceptButton: {
            Extend: 'button',
            boxShadow: '0 0 0 1px #878787'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames3;

      var header;
      var mainClass = (0, _classnames2.default)(_defineProperty({}, '' + this.props.addClassName, Boolean(this.props.addClassName)));
      var headerClass = (0, _classnames2.default)(_defineProperty({}, this.props.addClassName + '-header', Boolean(this.props.addClassName)));
      var bodyClass = (0, _classnames2.default)((_ClassNames3 = {}, _defineProperty(_ClassNames3, this.props.addClassName + '-body', Boolean(this.props.addClassName)), _defineProperty(_ClassNames3, 'flexbox-fix', true), _ClassNames3));
      if (this.props.header) {
        header = _react2.default.createElement(
          'div',
          { className: headerClass, style: this.styles().head },
          this.props.header
        );
      }
      return _react2.default.createElement(
        'div',
        { className: mainClass, style: this.styles().picker },
        header,
        _react2.default.createElement(
          'div',
          { style: this.styles().body, className: bodyClass },
          _react2.default.createElement(
            'div',
            { style: this.styles().saturation },
            _react2.default.createElement(_common.Saturation, _extends({}, this.styles().Saturation, this.props, { pointer: _PhotoshopPointerCircle2.default, onChange: this.handleChange }))
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().hue },
            _react2.default.createElement(_common.Hue, _extends({}, this.styles().Hue, this.props, { pointer: _PhotoshopPointer2.default, onChange: this.handleChange }))
          ),
          _react2.default.createElement(
            'div',
            { style: this.styles().controls },
            _react2.default.createElement(
              'div',
              { style: this.styles().top, className: 'flexbox-fix' },
              _react2.default.createElement(
                'div',
                { style: this.styles().previews },
                _react2.default.createElement(
                  'div',
                  { style: this.styles().label },
                  'new'
                ),
                _react2.default.createElement(
                  'div',
                  { style: this.styles().swatches },
                  _react2.default.createElement('div', { style: this.styles().new }),
                  _react2.default.createElement('div', { style: this.styles().current })
                ),
                _react2.default.createElement(
                  'div',
                  { style: this.styles().label },
                  'current'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: this.styles().actions },
                _react2.default.createElement(
                  'div',
                  { style: this.styles().acceptButton, ref: 'accept', onClick: this.handleAccept },
                  'OK'
                ),
                _react2.default.createElement(
                  'div',
                  { style: this.styles().button, ref: 'cancel', onClick: this.handleCancel },
                  'Cancel'
                ),
                _react2.default.createElement(_PhotoshopFields2.default, this.props)
              )
            )
          )
        )
      );
    }
  }]);

  return Photoshop;
}(_reactcss2.default.Component);

Photoshop.defaultProps = {
  header: 'Color Picker'
};

exports.default = (0, _common.ColorWrap)(Photoshop);