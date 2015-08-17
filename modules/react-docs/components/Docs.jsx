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
              link={ args.id }
              primaryColor={ this.props.primaryColor }/>

            <Markdown>{ body }</Markdown>
          </div>
          );
      }
    }

    return (
      <div>

        <style>{`
          .rendered{
            color: #607D8B; // blue grey 500
          }
          .rendered .hljs-comment {
            color: #B0BEC5; // blue grey 200
          }
          .rendered .hljs-keyword{
            color: #EF9A9A;  // red 200
          }
          .rendered .hljs-string{
            color: #689F38; // light green 700
          }
          .rendered .hljs-title{
          }
          .text code{
            background: #ddd;
            padding: 1px 5px 3px;
            border-radius: 2px;
            box-shadow: inset 0 0 0 1px rgba(0,0,0,.03);
            font-size: 85%;
            vertical-align: bottom;
          }
          .markdown p{
            margin: 15px 24px 15px 0;
          }
          .markdown h1{
            font-size: 38px;
            font-weight: 200;
            color: rgba(0,0,0,.77);
            margin: 0;
            padding-top: 54px;
            padding-bottom: 5px;
          }
          .markdown h2{
            font-size: 26px;
            line-height: 32px;
            font-weight: 200;
            color: rgba(0,0,0,.57);
            padding-top: 20px;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          .markdown h3{
            font-weight: normal;
            font-size: 20px;
            padding-top: 20px;
            margin-top: 20px;
            color: rgba(0,0,0,.67);
          }
        `}</style>

        <Grid>
          <div is="sidebar" ref="sidebar">
            <Sidebar files={ this.props.markdown } active={ this.state.visible } primaryColor={ this.props.primaryColor } bottom={ this.props.bottom } fixed={ this.state.sidebarFixed } />
          </div>
          <div ref="files" is="files">
            { markdownFiles }
          </div>
        </Grid>
      </div>
    );
  }
}

Docs.defaultProps = {
  primaryColor: '#03A9F4',
};

module.exports = Docs;
