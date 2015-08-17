'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var _require = require('../common');

var Saturation = _require.Saturation;
var Hue = _require.Hue;

var PhotoshopFields = require('./PhotoshopFields.jsx');
var PhotoshopPointerCircle = require('./PhotoshopPointerCircle.jsx');
var PhotoshopPointer = require('./PhotoshopPointer.jsx');

var PhotoshopPicker = (function (_ReactCSS$Component) {
  _inherits(PhotoshopPicker, _ReactCSS$Component);

  function PhotoshopPicker(props) {
    _classCallCheck(this, PhotoshopPicker);

    _get(Object.getPrototypeOf(PhotoshopPicker.prototype), 'constructor', this).call(this);

    this.state = {
      currentColor: props.hex
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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
          'new': {
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
        header = React.createElement(
          'div',
          { is: 'head' },
          this.props.header
        );
      }

      return React.createElement(
        'div',
        { is: 'picker' },
        header,
        React.createElement(
          'div',
          { is: 'body', className: 'flexbox-fix' },
          React.createElement(
            'div',
            { is: 'saturation' },
            React.createElement(Saturation, _extends({ is: 'Saturation' }, this.props, { pointer: PhotoshopPointerCircle, onChange: this.handleChange }))
          ),
          React.createElement(
            'div',
            { is: 'hue' },
            React.createElement(Hue, _extends({ is: 'Hue' }, this.props, { pointer: PhotoshopPointer, onChange: this.handleChange }))
          ),
          React.createElement(
            'div',
            { is: 'controls' },
            React.createElement(
              'div',
              { is: 'top', className: 'flexbox-fix' },
              React.createElement(
                'div',
                { is: 'previews' },
                React.createElement(
                  'div',
                  { is: 'label' },
                  'new'
                ),
                React.createElement(
                  'div',
                  { is: 'swatches' },
                  React.createElement('div', { is: 'new' }),
                  React.createElement('div', { is: 'current' })
                ),
                React.createElement(
                  'div',
                  { is: 'label' },
                  'current'
                )
              ),
              React.createElement(
                'div',
                { is: 'actions' },
                React.createElement(
                  'div',
                  { is: 'acceptButton', onClick: this.handleAccept },
                  'OK'
                ),
                React.createElement(
                  'div',
                  { is: 'button', onClick: this.handleCancel },
                  'Cancel'
                ),
                React.createElement(PhotoshopFields, this.props)
              )
            )
          )
        )
      );
    }
  }]);

  return PhotoshopPicker;
})(ReactCSS.Component);

PhotoshopPicker.defaultProps = {
  header: 'Color Picker'
};

module.exports = PhotoshopPicker;