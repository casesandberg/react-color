'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPicker = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

var _PhotoshopFields = require('./PhotoshopFields');

var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

var _PhotoshopPointerCircle = require('./PhotoshopPointerCircle');

var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

var _PhotoshopPointer = require('./PhotoshopPointer');

var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoshopPicker = exports.PhotoshopPicker = function (_ReactCSS$Component) {
  _inherits(PhotoshopPicker, _ReactCSS$Component);

  function PhotoshopPicker(props) {
    _classCallCheck(this, PhotoshopPicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoshopPicker).call(this));

    _this.state = {
      currentColor: props.hex
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleAccept = _this.handleAccept.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(PhotoshopPicker, [{
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
    key: 'handleChange',
    value: function handleChange(data) {
      this.props.onChange(data);
    }
  }, {
    key: 'handleAccept',
    value: function handleAccept() {
      this.props.onAccept && this.props.onAccept();
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.props.onCancel && this.props.onCancel();
    }
  }, {
    key: 'render',
    value: function render() {
      var header;

      if (this.props.header) {
        header = _react2.default.createElement(
          'div',
          { style: this.styles().head },
          this.props.header
        );
      }

      return _react2.default.createElement(
        'div',
        { style: this.styles().picker },
        header,
        _react2.default.createElement(
          'div',
          { style: this.styles().body, className: 'flexbox-fix' },
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

  return PhotoshopPicker;
}(_reactcss2.default.Component);

PhotoshopPicker.defaultProps = {
  header: 'Color Picker'
};

exports.default = PhotoshopPicker;