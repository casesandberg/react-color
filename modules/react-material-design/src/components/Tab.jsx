'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Tab extends ReactCSS.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  classes() {
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
          transition: 'opacity 100ms linear',
        },
      },
      'selected': {
        tab: {
          color: this.props.color,
          opacity: '.87',
        },
      },
    };
  }

  handleClick() {
    if (this.props.selectable !== false) {
      this.props.onClick(this.props.tab);
    }
  }

  render() {
    return (
      <div is="tab" onClick={ this.handleClick }>{ this.props.children }</div>
    );
  }

}

Tab.propTypes = {
  selected: React.PropTypes.bool,
};

Tab.defaultProps = {
  selected: false,
  color: '#fff',
};

module.exports = Tab;
