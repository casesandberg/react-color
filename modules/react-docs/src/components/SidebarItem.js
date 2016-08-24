/* jshint node: true, esnext: true */
"use strict";

import React from 'react';
import reactCSS from 'reactcss';

import { Tile } from '../../../react-material-design';

class SidebarItem extends React.Component {

  render() {

    const styles = reactCSS({
      'default': {
        sidebarItem: {
          fontSize: '14px',
          textDecoration: 'none',
          color: 'rgba(0, 0, 0, .57)',
          transition: 'all 200ms linear',
        },
        number: {
          fontSize: '14px',
          color: 'rgba(0, 0, 0, .27)',
          fontWeight: 'bold',
          paddingTop: '14px',
        },
        li: {
          paddingBottom: '8px',
        },
      },
      'bold': {
        sidebarItem: {
          fontWeight: 'bold',
          paddingTop: '14px',
          display: 'block',
        },
      },
      'active': {
        sidebarItem: {
          color: this.props.primaryColor,
        },
      },
    }, this.props);

    return (
      <div style={ styles.li }>
        <Tile condensed>
          <div style={ styles.number }>{ this.props.sidebarNumber }</div>
          <a href={ this.props.href } style={ styles.sidebarItem }>{ this.props.label }</a>
        </Tile>
      </div>
    );
  }
};

export default SidebarItem;
