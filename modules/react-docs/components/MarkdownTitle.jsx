/* jshint node: true, esnext: true */
"use strict";

var React = require('react');
var ReactCSS = require('reactcss');

module.exports = class MarkdownTitle extends ReactCSS.Component {

  constructor() {
    super();
    this.state = {
      hover: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  classes() {
    return {
      'default': {
        link: {
          opacity: '0',
          textDecoration: 'none',
          fill: '#2A5881',
          transition: 'opacity 200ms linear',
        },
      },
      'hovered': {
        link: {
          opacity: '1',
        },
      },
    };
  }

  styles() {
    return this.css({
      'hovered': this.state.hover,
    });
  }

  handleHover(e) {
    if (e.type === 'mouseenter') {
      this.setState({ hover: true });
    } else if (e.type === 'mouseleave') {
      this.setState({ hover: false });
    }
  }

  render() {
    var linkSvg = {
      __html: `
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
              </svg>
              `,
    };

    var title;
    if (this.props.isHeadline) {
      title = <h1>{ this.props.title } <a is="link" href={ '#' + this.props.link } dangerouslySetInnerHTML={ linkSvg } /></h1>;
    } else {
      title = <h2>{ this.props.title } <a is="link" href={ '#' + this.props.link } dangerouslySetInnerHTML={ linkSvg } /></h2>;
    }

    return (
      <div onMouseEnter={ this.handleHover } onMouseLeave={ this.handleHover }>
        { title }
      </div>
    );
  }
};
