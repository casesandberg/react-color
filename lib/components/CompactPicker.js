'use strict';Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _helpersColor = require('../helpers/color');

var _helpersColor2 = _interopRequireDefault(_helpersColor);

var _compactCompact = require('./compact/Compact');

var _compactCompact2 = _interopRequireDefault(_compactCompact);

var ColorPicker = (function (_ReactCSS$Component) {
  _inherits(ColorPicker, _ReactCSS$Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    _get(Object.getPrototypeOf(ColorPicker.prototype), 'constructor', this).call(this);

    this.state = (0, _merge2['default'])(_helpersColor2['default'].toState(props.color, 0), {
      visible: props.display
    });

    this.debounce = _lodash2['default'].debounce(function (fn, data) {
      fn(data);
    }, 100);

    this.handleChange = this.handleChange.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  _createClass(ColorPicker, [{
    key: 'classes',
    value: function classes() {
      return {
        'show': {
          wrap: {
            zIndex: '999',
            position: 'absolute',
            display: 'block'
          },
          picker: {
            zIndex: '2',
            position: 'relative'
          },
          cover: {
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0'
          }
        },
        'hide': {
          wrap: {
            zIndex: '999',
            position: 'absolute',
            display: 'none'
          }
        },
        'right': {
          wrap: {
            left: '100%',
            marginLeft: '20px',
            top: '0'
          }
        },
        'left': {
          wrap: {
            right: '100%',
            marginRight: '20px',
            top: '0'
          }
        },
        'below': {
          wrap: {
            left: '0',
            marginLeft: '0',
            top: '100%',
            marginTop: '20px'
          }
        },
        'override': {
          wrap: this.props.positionCSS
        }
      };
    }
  }, {
    key: 'styles',
    value: function styles() {
      return this.css({
        'below': this.props.position === 'below' && this.props.display !== null,
        'right': this.props.position === 'right' && this.props.display !== null,
        'left': this.props.position === 'left' && this.props.display !== null,
        'show': this.state.visible === true,
        'hide': this.state.visible === false,
        'override': _lodash2['default'].isPlainObject(this.props.positionCSS)
      });
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      if (this.state.visible === true) {
        this.setState({
          visible: false
        });
        this.props.onClose && this.props.onClose({
          hex: this.state.hex,
          hsl: this.state.hsl,
          rgb: this.state.rgb
        });
      }
    }
  }, {
    key: 'handleAccept',
    value: function handleAccept() {
      this.handleHide();
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      if (this.state.visible === true) {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      data = _helpersColor2['default'].simpleCheckForValidColor(data);
      if (data) {
        var colors = _helpersColor2['default'].toState(data, data.h || this.state.oldHue);
        this.setState(colors);
        this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors);
        this.props.onChange && this.props.onChange(colors);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState((0, _merge2['default'])(_helpersColor2['default'].toState(nextProps.color, this.state.oldHue), {
        visible: nextProps.display
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { style: this.styles().wrap },
        _react2['default'].createElement(
          'div',
          { style: this.styles().picker },
          _react2['default'].createElement(_compactCompact2['default'], _extends({}, this.props, this.state, { onChange: this.handleChange, onAccept: this.handleAccept, onCancel: this.handleCancel }))
        ),
        _react2['default'].createElement('div', { style: this.styles().cover, onClick: this.handleHide })
      );
    }
  }]);

  return ColorPicker;
})(_reactcss2['default'].Component);

ColorPicker.defaultProps = {
  color: {
    h: 250,
    s: .50,
    l: .20,
    a: 1
  },
  display: null,
  type: 'sketch',
  position: 'right',
  positionCSS: {}
};

exports['default'] = ColorPicker;
module.exports = exports['default'];