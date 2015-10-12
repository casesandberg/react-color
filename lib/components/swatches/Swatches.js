'use strict';
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var color = require('../../helpers/color');
var material = require('material-colors');

var _require = require('../../../modules/react-material-design');

var Raised = _require.Raised;

var SwatchesGroup = require('./SwatchesGroup');

var Swatches = (function (_ReactCSS$Component) {
  _inherits(Swatches, _ReactCSS$Component);

  function Swatches() {
    _classCallCheck(this, Swatches);

    _get(Object.getPrototypeOf(Swatches.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
  }

  _createClass(Swatches, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            width: '320px',
            height: '240px'
          },
          overflow: {
            height: '240px',
            overflowY: 'scroll'
          },
          body: {
            padding: '16px 0 6px 16px'
          },

          clear: {
            clear: 'both'
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      color.isValidHex(data) && this.props.onChange(data);
    }
  }, {
    key: 'render',
    value: function render() {
      var groups = [];
      if (this.props.colors) {
        for (var i = 0; i < this.props.colors.length; i++) {
          var group = this.props.colors[i];
          groups.push(React.createElement(SwatchesGroup, { key: group.toString(), group: group, active: this.props.hex, onClick: this.handleChange }));
        }
      }

      return React.createElement(
        'div',
        { style: this.styles().picker },
        React.createElement(
          Raised,
          null,
          React.createElement(
            'div',
            { style: this.styles().overflow },
            React.createElement(
              'div',
              { style: this.styles().body },
              groups,
              React.createElement('div', { style: this.styles().clear })
            )
          )
        )
      );
    }
  }]);

  return Swatches;
})(ReactCSS.Component);

Swatches.defaultProps = {
  colors: [[material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']], [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']], [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']], [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']], [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']], [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']], [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']], [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']], [material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']], ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']], [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']], [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']], [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']], [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']], [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']], [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']], [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']], [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']]]
};

module.exports = Swatches;