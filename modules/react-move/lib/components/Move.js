'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');

var Move = (function (_ReactCSS$Component) {
  _inherits(Move, _ReactCSS$Component);

  function Move() {
    _classCallCheck(this, Move);

    _get(Object.getPrototypeOf(Move.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Move, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          outer: {
            opacity: this.props.inStartOpacity,
            transform: this.props.inStartTransform,
            transition: this.props.inStartTransition
          }
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var animate = React.findDOMNode(this.refs.outer);

      setTimeout((function () {
        animate.style.opacity = this.props.inEndOpacity;
        animate.style.transform = this.props.inEndTransform;
        animate.style.transition = this.props.inEndTransition;
      }).bind(this), this.props.inDelay);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().outer, ref: 'outer', className: 'foobarbaz' },
        this.props.children
      );
    }
  }]);

  return Move;
})(ReactCSS.Component);

Move.defaultProps = {
  inStartOpacity: '0',
  inStartTransform: '',
  inStartTransition: 'all 400ms cubic-bezier(.55,0,.1,1)',
  inEndOpacity: '1',
  inEndTransform: '',
  inEndTransition: 'all 400ms cubic-bezier(.55,0,.1,1)',
  inDelay: 0
};

module.exports = Move;