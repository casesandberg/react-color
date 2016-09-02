/* jshint node: true, esnext: true */
"use strict";

import React from 'react';
import reactCSS from 'reactcss';

class Tile extends React.Component {

  render() {

    const styles = reactCSS({
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
          overflow: 'auto',
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
          paddingRight: '0px',
        },
        sidebar: {
          minWidth: '28px',
          maxWidth: '28px',
          flexBasis: '28px',
        },
      },
    }, {
      'clickable': this.props.onClick,
    }, this.props);

    var [sidebar, content] = this.props.children;

    return (
      <div style={ styles.tile } className="flexbox-fix">

        <div style={ styles.primary } className="flexbox-fix">
          <div style={ styles.sidebar } key={ "sidebar-#{ sidebar }" }>
            { sidebar }
          </div>
          <div style={ styles.content } key={ "content-#{ content }" }>
            { content }
          </div>
        </div>
      </div>
    );
  }
};

export default Tile;
