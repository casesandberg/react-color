'use strict';

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

class Tabs extends ReactCSS.Component {

  constructor(props) {
    super();

    var selectedTab;
    if (props.selectedTab < (props.tabs && props.tabs.length)) {
      selectedTab = props.selectedTab;
    } else {
      selectedTab = 0;
    }

    this.state = {
      selectedTab: selectedTab,
    };

    this.handleClick = this.handleClick.bind(this);
    this.slide = this.slide.bind(this);
  }

  classes() {
    return {
      'default': {
        tabs: {
          position: 'relative',
          background: this.props.background,
        },
        tabWrap: {
          display: 'flex',
        },
        tab: {
          justifyContent: 'flex-start',
          minWidth: '68px',
          maxWidth: '240px',
        },
        Tab: {
          color: this.props.color,
          inactive: this.props.inactive,
          capitalize: this.props.capitalize,
        },
        indicator: {
          height: '0',
          position: 'absolute',
          bottom: '0',
          left: '0',
          background: this.props.color,
          transition: 'all 200ms linear',
        },
      },
      'scrollable': {
        tabs: {
          overflowX: 'scroll',
        },
        tabWrap: {
          paddingLeft: '60px',
          justifyContent: 'flex-start',
          width: '400%',
        },
        tab: {
          width: 'auto',
        },
      },
      'align-justify': {
        tabWrap: {
          justifyContent: 'space-between',
        },
        tab: {
          width: `${ 100 / this.props.tabs.length }%`,
        },
      },
      'align-left': {
        tabWrap: {
          paddingLeft: '60px',
          justifyContent: 'flex-start',
        },
        tab: {
          width: 'auto',
        },
      },
      'align-center': {
        tabWrap: {
          justifyContent: 'center',
        },
        tab: {
          width: 'auto',
        },
      },
    };
  }

  styles() {
    return this.css({
      'scrollable': this.props.width / this.props.tabs.length < 72,
    });
  }

  handleClick(tab) {
    if (this.props.onChange) {
      this.props.onChange(tab);
    }

    this.setState({
      selectedTab: tab,
    });
  }

  slide() {
    if (this.props.tabs.length) {
      var containerNode = this.refs.tabs.getDOMNode();
      var containerLeft = containerNode.scrollLeft;
      var containerRight = containerNode.offsetWidth + containerNode.scrollLeft;

      var selectedNode = this.refs['tab-' + this.state.selectedTab] && this.refs['tab-' + this.state.selectedTab].getDOMNode();
      var selectedLeft = selectedNode && selectedNode.getBoundingClientRect().left - containerNode.getBoundingClientRect().left + containerNode.scrollLeft;
      var selectedRight = selectedNode && selectedLeft + selectedNode.offsetWidth;

      // scroll right if tab is off screen
      if (selectedRight > containerRight) {
        containerNode.scrollLeft += (selectedRight - containerRight);
      }

      // scroll left if tab is off screen
      if (selectedLeft < containerLeft) {
        containerNode.scrollLeft -= (containerLeft - selectedLeft);
      }

      // slide the indicator
      var indicator = this.refs.indicator;
      indicator.style.left = selectedLeft + 'px';
      indicator.style.width = selectedNode.offsetWidth + 'px';
      indicator.style.height = '2px';
    }
  }

  componentDidMount() {
    this.slide();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTab !== this.state.selectedTab) {
      this.setState({ selectedTab: nextProps.selectedTab });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.selectedTab >= (nextProps.tabs && nextProps.tabs.length)) {
      nextState.selectedTab = nextProps.tabs.length - 1;
    }
  }

  componentDidUpdate() {
    this.slide();
  }

  render() {
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

      tabs.push(<div is="tab" ref={ 'tab-' + i } key={ i }>
        <Link onClick={ callback } callbackValue={ callbackValue } newTab={ newTab }>
          <Tab is="Tab" tab={ i } selected={ this.state.selectedTab === i } selectable={ tab.selectable } onClick={ this.handleClick }>{ label }</Tab>
        </Link>
      </div>);
    }

    return (
      <div is="tabs" ref="tabs">
        <div is="tabWrap" className="flexbox-fix">
          { tabs }
        </div>
        <div is="indicator" ref="indicator" />
      </div>
    );
  }
}

Tabs.defaultProps = {
  selectedTab: 0,
  background: 'transparent',
  color: '#fff',
};

module.exports = Tabs;
