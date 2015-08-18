'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var Tab = (function (_ReactCSS$Component) {
  _inherits(Tab, _ReactCSS$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).call(this);

    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(Tab, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          tab: {
            color: this.props.inactive || this.props.color,
            cursor: 'pointer',
            paddingLeft: '12px',
            paddingRight: '12px',
            height: '48px',
            lineHeight: '48px',
            textAlign: 'center',
            fontSize: '14px',
            textTransform: this.props.capitalize === false ? '' : 'uppercase',
            fontWeight: '500',
            whiteSpace: 'nowrap',
            opacity: '.47',
            transition: 'opacity 100ms linear'
          }
        },
        'selected': {
          tab: {
            color: this.props.color,
            opacity: '.87'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      if (this.props.selectable !== false) {
        this.props.onClick(this.props.tab);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().tab, onClick: this.handleClick },
        this.props.children
      );
    }
  }]);

  return Tab;
})(ReactCSS.Component);

Tab.propTypes = {
  selected: React.PropTypes.bool
};

Tab.defaultProps = {
  selected: false,
  color: '#fff'
};

module.exports = Tab;