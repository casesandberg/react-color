/* jshint node: true, esnext: true */
"use strict";

var React = require('react');
var ReactCSS = require('reactcss');
var markdown = require('../helpers/markdown');

var { Tile } = require('react-material-design');
var SidebarItem = require('./SidebarItem');

module.exports = class Sidebar extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        sidebar: {
          paddingTop: '20px',
          position: 'relative',
          width: '100%',
          maxWidth: '130px',
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
    };
  }

  render() {

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
            label={ args.title } />
        );
      }
    }

    return (
      <div is="sidebar">

        <div is="star">
          <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-context&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>
        </div>

        { sidebarItems }

      </div>
    );
  }
};
