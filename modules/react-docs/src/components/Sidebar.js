/* jshint node: true, esnext: true */
"use strict";

import React from 'react';
import reactCSS from 'reactcss';
import markdown from '../helpers/markdown';

import { Tile } from '../../../react-material-design';
import SidebarItem from './SidebarItem';

class Sidebar extends React.Component {

  render() {

    const styles = reactCSS({
      'default': {
        sidebar: {
          paddingTop: '20px',
          position: 'relative',
          width: '170px',
        },
        star: {
          display: 'none',
          position: 'absolute',
        },
      },
      'fixed': {
        sidebar: {
          top: '0',
          bottom: '0',
          position: 'fixed',
        },
        star: {
          bottom: '30px',
          top: 'auto',
          display: 'block',
        },
      },
    }, this.props);

    var sidebarItems = [];

    for (var fileName in this.props.files) {
      if (this.props.files.hasOwnProperty(fileName)) {
        var file = this.props.files[fileName];
        var args = markdown.getArgs(file);
        var sectionNumber;
        if (markdown.isSubSection(fileName)) {
          sectionNumber = fileName.split('-')[0];
        } else {
          sectionNumber = false;
        }

        sidebarItems.push(
          <SidebarItem key={ fileName }
            sidebarNumber={ sectionNumber }
            href={ '#' + args.id }
            active={ this.props.active === args.id }
            bold={ sectionNumber && true }
            label={ args.title }
            primaryColor={ this.props.primaryColor } />
        );
      }
    }

    return (
      <div style={ styles.sidebar }>

        <div style={ styles.star }>
          { this.props.bottom }
        </div>

        { sidebarItems }

      </div>
    );
  }
};

export default Sidebar;
