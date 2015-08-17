'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('../../modules/tinycolor2');
var merge = require('merge');
var _ = require('lodash');

var Photoshop = require('./photoshop/Photoshop.jsx');
var Sketch = require('./sketch/Sketch.jsx');
var Chrome = require('./chrome/Chrome.jsx');
var Swatches = require('./swatches/Swatches.jsx');
var Slider = require('./slider/Slider.jsx');
var Material = require('./material/Material.jsx');
var Compact = require('./compact/Compact.jsx');

var toColors = function toColors(data, oldHue) {
  var color = tinycolor(data);
  var hsl = color.toHsl();
  var hsv = color.toHsv();
  if (hsl.s === 0) {
    hsl.h = oldHue;
    hsv.h = oldHue;
  }

  return {
    hsl: hsl,
    hex: color.toHex(),
    rgb: color.toRgb(),
    hsv: hsv,
    oldHue: data.h || oldHue || hsl.h
  };
};

var ColorPicker = (function (_ReactCSS$Component) {
  _inherits(ColorPicker, _ReactCSS$Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    _get(Object.getPrototypeOf(ColorPicker.prototype), 'constructor', this).call(this);

    this.state = merge(toColors(props.color), {
      visible: props.display
    });

    this.debounce = _.debounce(function (fn, data) {
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
        'override': _.isPlainObject(this.props.positionCSS)
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
      var colors = toColors(data, data.h || this.state.oldHue);
      this.setState(colors);
      this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors);
      this.props.onChange && this.props.onChange(colors);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(merge(toColors(nextProps.color, this.state.oldHue), {
        visible: nextProps.display
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var Picker;
      if (this.props.type === 'sketch') {
        Picker = Sketch;
      } else if (this.props.type === 'photoshop') {
        Picker = Photoshop;
      } else if (this.props.type === 'chrome') {
        Picker = Chrome;
      } else if (this.props.type === 'swatches') {
        Picker = Swatches;
      } else if (this.props.type === 'slider') {
        Picker = Slider;
      } else if (this.props.type === 'material') {
        Picker = Material;
      } else if (this.props.type === 'compact') {
        Picker = Compact;
      }

      return React.createElement(
        'div',
        { is: 'wrap' },
        React.createElement(
          'div',
          { is: 'picker' },
          React.createElement(Picker, _extends({}, this.state, { onChange: this.handleChange, onAccept: this.handleAccept, onCancel: this.handleCancel }))
        ),
        React.createElement('div', { is: 'cover', onClick: this.handleHide })
      );
    }
  }]);

  return ColorPicker;
})(ReactCSS.Component);

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

module.exports = ColorPicker;