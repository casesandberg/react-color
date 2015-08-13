'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var markdown = require('../helpers/markdown');

var { Grid } = require('react-basic-layout');
var MarkdownTitle = require('./MarkdownTitle');
var Markdown = require('./Markdown');
var Code = require('./Code');
var Sidebar = require('./Sidebar');

class Docs extends ReactCSS.Component {

  constructor() {
    super();
    this.state = {
      sidebarFixed: false,
      visible: false,
      files: {},
    };
    this.changeSelection = this.changeSelection.bind(this);
    this.attachSidebar = this.attachSidebar.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  classes() {
    return {
      'default': {
      },
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);

    var domFiles = React.findDOMNode(this.refs.files) && React.findDOMNode(this.refs.files).children;

    if (domFiles) {
      var files = {};
      for (var i = 0; i < domFiles.length; i++) {
        var file = domFiles[i];
        files[file.offsetTop] = file.id;
      }

      this.setState({ files: files });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll(e) {
    this.changeSelection();
    this.attachSidebar();
  }

  attachSidebar() {
    var sidebarTop = React.findDOMNode(this.refs.sidebar).getBoundingClientRect().top;

    if (sidebarTop <= 0 && this.state.sidebarFixed === false) {
      this.setState({ sidebarFixed: true });
    }

    if (sidebarTop > 0 && this.state.sidebarFixed === true) {
      this.setState({ sidebarFixed: false });
    }
  }

  changeSelection() {
    var top = document.body.scrollTop - 300;
    var mostVisible = '';

    for (var offset in this.state.files) {
      if (this.state.files.hasOwnProperty(offset)) {
        var id = this.state.files[offset];
        if (offset < top) {
          mostVisible = id;
        }
      }
    }

    if (mostVisible !== this.state.visible) {
      this.setState({ visible: mostVisible });
    }
  }

  render() {
    var markdownFiles = [];

    for (var fileName in this.props.markdown) {
      if (this.props.markdown.hasOwnProperty(fileName)) {
        var file = this.props.markdown[fileName];
        var args = markdown.getArgs(file);
        var body = markdown.getBody(file);

        markdownFiles.push(
          <div key={ fileName } id={ args.id } is="file" className="markdown">

            <MarkdownTitle
              isHeadline={ markdown.isSubSection(fileName) ? true : false }
              title={ args.title }
              link={ args.id } />

            <Markdown>{ body }</Markdown>
          </div>
          );
      }
    }

    return (
      <Grid>
        <div is="sidebar" ref="sidebar">
          <Sidebar files={ this.props.markdown } active={ this.state.visible } fixed={ this.state.sidebarFixed } />
        </div>
        <div ref="files" is="files">
          { markdownFiles }
        </div>
      </Grid>
    );
  }
}

module.exports = Docs;
