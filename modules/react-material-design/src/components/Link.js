'use strict';

import React from 'react';
import isString from 'lodash/isString';

class Link extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e, this.props.callbackValue);
    }
  }

  render() {

    var a;
    if (isString(this.props.onClick)) {
      a = <a style={{ textDecoration: 'none' }} href={ this.props.onClick } target={ this.props.newTab && '_blank' }>{ this.props.children }</a>;
    } else {
      a = <a style={{ textDecoration: 'none' }} onClick={ this.handleClick }>{ this.props.children }</a>;
    }

    return a;
  }
}

// Link.propTypes =
//   onClick: PropTypes.oneOfType(
//     PropTypes.string,
//     PropTypes.func
//   );

Link.defaultProps = {
  newTab: false,
};

export default Link;
