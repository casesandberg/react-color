'use strict';
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var color = require('../../helpers/color');

var _require = require('../common');

var EditableInput = _require.EditableInput;

var ChromeFields = (function (_ReactCSS$Component) {
  _inherits(ChromeFields, _ReactCSS$Component);

  function ChromeFields(props) {
    _classCallCheck(this, ChromeFields);

    _get(Object.getPrototypeOf(ChromeFields.prototype), 'constructor', this).call(this);

    this.state = {
      view: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleViews = this.toggleViews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hideHighlight = this.hideHighlight.bind(this);
    this.showHighlight = this.showHighlight.bind(this);
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
                boxShadow: 'inset 0 0 0 1px #dadada',
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
    key: 'handleChange',
    value: function handleChange(data) {
      this.props.onChange(data);
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
    key: 'toggleViews',
    value: function toggleViews() {
      if (this.state.view === 'hex') {
        this.setState({ view: 'rgb' });
      } else if (this.state.view === 'rgb') {
        this.setState({ view: 'hsl' });
      } else if (this.state.view === 'hsl') {
        if (this.props.hsl.a === 1) {
          this.setState({ view: 'hex' });
        } else {
          this.setState({ view: 'rgb' });
        }
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
    key: 'handleChange',
    value: function handleChange(data) {
      if (data.hex) {
        color.isValidHex(data.hex) && this.props.onChange(data.hex);
      } else if (data.r || data.g || data.b) {
        this.props.onChange({
          r: data.r || this.props.rgb.r,
          g: data.g || this.props.rgb.g,
          b: data.b || this.props.rgb.b
        });
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }

        this.props.onChange({
          h: this.props.hsl.h,
          s: this.props.hsl.s,
          l: this.props.hsl.l,
          a: Math.round(data.a * 100) / 100
        });
      } else if (data.h || data.s || data.l) {

        this.props.onChange({
          h: data.h || this.props.hsl.h,
          s: data.s && data.s.replace('%', '') || this.props.hsl.s,
          l: data.l && data.l.replace('%', '') || this.props.hsl.l
        });
      }
    }
  }, {
    key: 'showHighlight',
    value: function showHighlight() {
      React.findDOMNode(this.refs.iconHighlight).style.display = 'block';
    }
  }, {
    key: 'hideHighlight',
    value: function hideHighlight() {
      React.findDOMNode(this.refs.iconHighlight).style.display = 'none';
    }
  }, {
    key: 'render',
    value: function render() {
      var fields;
      if (this.state.view === 'hex') {
        fields = React.createElement(
          'div',
          { style: this.styles().fields, className: 'flexbox-fix' },
          React.createElement(
            'div',
            { style: this.styles().field },
            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange }))
          )
        );
      } else if (this.state.view === 'rgb') {
        fields = React.createElement(
          'div',
          { style: this.styles().fields, className: 'flexbox-fix' },
          React.createElement(
            'div',
            { style: this.styles().field },
            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange }))
          ),
          React.createElement(
            'div',
            { style: this.styles().field },
            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange }))
          ),
          React.createElement(
            'div',
            { style: this.styles().field },
            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange }))
          ),
          React.createElement(
            'div',
            { style: this.styles().field },
            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'a', value: this.props.rgb.a, arrowOffset: .01, onChange: this.handleChange }))
          )
        );
      } else if (this.state.view === 'hsl') {
        fields = React.createElement(
          'div',
          { style: this.styles().fields, className: 'flexbox-fix' },
          React.createElement(
            'div',
            { style: this.styles().field },
            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'h', value: Math.round(this.props.hsl.h), onChange: this.handleChange }))
          ),
          React.createElement(
            'div',
            { style: this.styles().field },
            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 's', value: Math.round(this.props.hsl.s * 100) + '%', onChange: this.handleChange }))
          ),
          React.createElement(
            'div',
            { style: this.styles().field },
            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'l', value: Math.round(this.props.hsl.l * 100) + '%', onChange: this.handleChange }))
          ),
          React.createElement(
            'div',
            { style: this.styles().field },
            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'a', value: this.props.hsl.a, arrowOffset: .01, onChange: this.handleChange }))
          )
        );
      }

      return React.createElement(
        'div',
        { style: this.styles().wrap, className: 'flexbox-fix' },
        fields,
        React.createElement(
          'div',
          { style: this.styles().toggle },
          React.createElement(
            'div',
            { style: this.styles().icon, onClick: this.toggleViews },
            React.createElement(
              'svg',
              { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24', onMouseOver: this.showHighlight, onMouseEnter: this.showHighlight, onMouseOut: this.hideHighlight },
              React.createElement('path', { fill: '#333', d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
            )
          ),
          React.createElement('div', { style: this.styles().iconHighlight, ref: 'iconHighlight' })
        )
      );
    }
  }]);

  return ChromeFields;
})(ReactCSS.Component);

module.exports = ChromeFields;