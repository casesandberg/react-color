'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var SwatchesColor = require('./SwatchesColor.jsx');

var SwatchesGroup = (function (_ReactCSS$Component) {
  _inherits(SwatchesGroup, _ReactCSS$Component);

  function SwatchesGroup() {
    _classCallCheck(this, SwatchesGroup);

    _get(Object.getPrototypeOf(SwatchesGroup.prototype), 'constructor', this).call(this);

    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(SwatchesGroup, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          group: {
            paddingBottom: '10px',
            width: '40px',
            float: 'left',
            marginRight: '10px'
          }
        }
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick(data) {
      this.props.onClick(data);
    }
  }, {
    key: 'render',
    value: function render() {
      var colors = [];
      for (var i = 0; i < this.props.group.length; i++) {
        var color = this.props.group[i];

        colors.push(React.createElement(SwatchesColor, { key: color, color: color, active: color.replace('#', '').toLowerCase() === this.props.active, first: i === 0, last: i === this.props.group.length - 1, onClick: this.handleClick }));
      }

      return React.createElement(
        'div',
        { is: 'group' },
        colors
      );
    }
  }]);

  return SwatchesGroup;
})(ReactCSS.Component);

module.exports = SwatchesGroup;