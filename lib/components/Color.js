'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _lodash = require('lodash.isplainobject');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.debounce');

var _lodash4 = _interopRequireDefault(_lodash3);

var _color = require('../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _Photoshop = require('./photoshop/Photoshop');

var _Photoshop2 = _interopRequireDefault(_Photoshop);

var _Sketch = require('./sketch/Sketch');

var _Sketch2 = _interopRequireDefault(_Sketch);

var _Chrome = require('./chrome/Chrome');

var _Chrome2 = _interopRequireDefault(_Chrome);

var _Swatches = require('./swatches/Swatches');

var _Swatches2 = _interopRequireDefault(_Swatches);

var _Slider = require('./slider/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Material = require('./material/Material');

var _Material2 = _interopRequireDefault(_Material);

var _Compact = require('./compact/Compact');

var _Compact2 = _interopRequireDefault(_Compact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_ReactCSS$Component) {
  _inherits(ColorPicker, _ReactCSS$Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPicker).call(this));

    _this.state = (0, _merge2.default)(_color2.default.toState(props.color, 0), {
      visible: props.display
    });

    _this.debounce = (0, _lodash4.default)(function (fn, data) {
      fn(data);
    }, 100);

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);
    _this.handleAccept = _this.handleAccept.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
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
        'override': (0, _lodash2.default)(this.props.positionCSS)
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
      data = _color2.default.simpleCheckForValidColor(data);
      if (data) {
        var colors = _color2.default.toState(data, data.h || this.state.oldHue);
        this.setState(colors);
        this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors);
        this.props.onChange && this.props.onChange(colors);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState((0, _merge2.default)(_color2.default.toState(nextProps.color, this.state.oldHue), {
        visible: nextProps.display
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var Picker;
      if (this.props.custom) {
        Picker = this.props.custom;
      } else if (this.props.type === 'sketch') {
        Picker = _Sketch2.default;
      } else if (this.props.type === 'photoshop') {
        Picker = _Photoshop2.default;
      } else if (this.props.type === 'chrome') {
        Picker = _Chrome2.default;
      } else if (this.props.type === 'swatches') {
        Picker = _Swatches2.default;
      } else if (this.props.type === 'slider') {
        Picker = _Slider2.default;
      } else if (this.props.type === 'material') {
        Picker = _Material2.default;
      } else if (this.props.type === 'compact') {
        Picker = _Compact2.default;
      }

      return _react2.default.createElement(
        'div',
        { style: this.styles().wrap },
        _react2.default.createElement(
          'div',
          { style: this.styles().picker },
          _react2.default.createElement(Picker, _extends({}, this.props, this.state, { onChange: this.handleChange, onAccept: this.handleAccept, onCancel: this.handleCancel }))
        ),
        _react2.default.createElement('div', { style: this.styles().cover, onClick: this.handleHide })
      );
    }
  }]);

  return ColorPicker;
}(_reactcss2.default.Component);

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

exports.default = ColorPicker;