/* jshint node: true, esnext: true */
"use strict";

import React from 'react';
import ReactCSS from 'reactcss';

class Tile extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        tile: {
          fontSize: '16px',
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          color: this.props.color,
        },
        primary: {
          display: 'flex',
          width: '100%',
        },
        sidebar: {
          minWidth: '56px',
          maxWidth: '56px',
          flexBasis: '56px', // 72 minus 16
        },
        content: {
          background: 'none',
          flex: '1',
          overflow: 'scroll',
        },
        secondary: {
          flexBasis: '42',
          textAlign: 'center',
        },
        sidebarIcon: {
          marginTop: '-12px',
          marginLeft: '-12px',
          marginBottom: '-12px',
        },
      },
      'divider': {
        tile: {
          boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.12)',
        },
      },
      'condensed': {
        tile: {
          paddingBottom: '0px',
          paddingTop: '0px',
        },
        sidebar: {
          minWidth: '28px',
          maxWidth: '28px',
          flexBasis: '28px',
        },
      },
    };
  }

  styles() {
    return this.css({
      'clickable': this.props.onClick,
    });
  }

  render() {
    var [sidebar, content] = this.props.children;

    return (
      <div is="tile" className="flexbox-fix">

        <div is="primary" className="flexbox-fix">
          <div is="sidebar" key={ "sidebar-#{ sidebar }" }>
            { sidebar }
          </div>
          <div is="content" key={ "content-#{ content }" }>
            { content }
          </div>
        </div>
      </div>
    );
  }
};

export default Tile;
