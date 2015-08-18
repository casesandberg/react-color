'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var _ = require('lodash');

var Tab = require('./Tab');
var Link = require('./Link');

// var Ink = require('./Ink');

// var context = {
//   primaryColor: '#2196F3',
//   accentColor: '#E91E63',
//   theme: 'light'
// }

var Tabs = (function (_ReactCSS$Component) {
  _inherits(Tabs, _ReactCSS$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).call(this);

    var selectedTab;
    if (props.selectedTab < (props.tabs && props.tabs.length)) {
      selectedTab = props.selectedTab;
    } else {
      selectedTab = 0;
    }

    this.state = {
      selectedTab: selectedTab
    };

    this.handleClick = this.handleClick.bind(this);
    this.slide = this.slide.bind(this);
  }

  _createClass(Tabs, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          tabs: {
            position: 'relative',
            background: this.props.background
          },
          tabWrap: {
            display: 'flex'
          },
          tab: {
            justifyContent: 'flex-start',
            minWidth: '68px',
            maxWidth: '240px'
          },
          Tab: {
            color: this.props.color,
            inactive: this.props.inactive,
            capitalize: this.props.capitalize
          },
          indicator: {
            height: '0',
            position: 'absolute',
            bottom: '0',
            left: '0',
            background: this.props.color,
            transition: 'all 200ms linear'
          }
        },
        'scrollable': {
          tabs: {
            overflowX: 'scroll'
          },
          tabWrap: {
            paddingLeft: '60px',
            justifyContent: 'flex-start',
            width: '400%'
          },
          tab: {
            width: 'auto'
          }
        },
        'align-justify': {
          tabWrap: {
            justifyContent: 'space-between'
          },
          tab: {
            width: 100 / this.props.tabs.length + '%'
          }
        },
        'align-left': {
          tabWrap: {
            paddingLeft: '60px',
            justifyContent: 'flex-start'
          },
          tab: {
            width: 'auto'
          }
        },
        'align-center': {
          tabWrap: {
            justifyContent: 'center'
          },
          tab: {
            width: 'auto'
          }
        }
      };
    }
  }, {
    key: 'styles',
    value: function styles() {
      return this.css({
        'scrollable': this.props.width / this.props.tabs.length < 72
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(tab) {
      if (this.props.onChange) {
        this.props.onChange(tab);
      }

      this.setState({
        selectedTab: tab
      });
    }
  }, {
    key: 'slide',
    value: function slide() {
      if (this.props.tabs.length) {
        var containerNode = this.refs.tabs.getDOMNode();
        var containerLeft = containerNode.scrollLeft;
        var containerRight = containerNode.offsetWidth + containerNode.scrollLeft;

        var selectedNode = this.refs['tab-' + this.state.selectedTab] && this.refs['tab-' + this.state.selectedTab].getDOMNode();
        var selectedLeft = selectedNode && selectedNode.getBoundingClientRect().left - containerNode.getBoundingClientRect().left + containerNode.scrollLeft;
        var selectedRight = selectedNode && selectedLeft + selectedNode.offsetWidth;

        // scroll right if tab is off screen
        if (selectedRight > containerRight) {
          containerNode.scrollLeft += selectedRight - containerRight;
        }

        // scroll left if tab is off screen
        if (selectedLeft < containerLeft) {
          containerNode.scrollLeft -= containerLeft - selectedLeft;
        }

        // slide the indicator
        var indicator = React.findDOMNode(this.refs.indicator);
        indicator.style.left = selectedLeft + 'px';
        indicator.style.width = selectedNode.offsetWidth + 'px';
        indicator.style.height = '2px';
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.slide();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selectedTab !== this.state.selectedTab) {
        this.setState({ selectedTab: nextProps.selectedTab });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.selectedTab >= (nextProps.tabs && nextProps.tabs.length)) {
        nextState.selectedTab = nextProps.tabs.length - 1;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.slide();
    }
  }, {
    key: 'render',
    value: function render() {
      var tabs = [];
      for (var i = 0; i < this.props.tabs.length; i++) {
        var tab = this.props.tabs[i];

        var label;
        var callback;
        var callbackValue;
        var newTab;
        if (_.isString(tab)) {
          label = tab;
          callback = null;
        } else {
          label = tab.label;
          callback = tab.onClick;
          callbackValue = tab.callbackValue;
          newTab = tab.newTab;
        }

        tabs.push(React.createElement(
          'div',
          { style: this.styles().tab, ref: 'tab-' + i, key: i },
          React.createElement(
            Link,
            { onClick: callback, callbackValue: callbackValue, newTab: newTab },
            React.createElement(
              Tab,
              _extends({}, this.styles().Tab, { tab: i, selected: this.state.selectedTab === i, selectable: tab.selectable, onClick: this.handleClick }),
              label
            )
          )
        ));
      }

      return React.createElement(
        'div',
        { style: this.styles().tabs, ref: 'tabs' },
        React.createElement(
          'div',
          { style: this.styles().tabWrap, className: 'flexbox-fix' },
          tabs
        ),
        React.createElement('div', { style: this.styles().indicator, ref: 'indicator' })
      );
    }
  }]);

  return Tabs;
})(ReactCSS.Component);

Tabs.defaultProps = {
  selectedTab: 0,
  background: 'transparent',
  color: '#fff'
};

module.exports = Tabs;