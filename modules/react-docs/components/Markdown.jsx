'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var markdown = require('../../helpers/markdown');

var Code = require('./Code');

module.exports = class Markdown extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        markdown: {
          fontSize: '17px',
          lineHeight: '24px',
          color: 'rgba(0,0,0,.47)',
        },
      },
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    var children = this.props.children;

    var newLines = children;

    var codes = [];
    for (var i = 0; i < markdown.isCode(children).length; i++) {
      var codeBlock = markdown.isCode(children)[i];
      newLines = newLines.replace(codeBlock[1], '|Code:' + i + '|');
      codes[i] = <Code file={ codeBlock[2] } condensed={ this.props.condensed } borders />;
    }

    var markdownFile = [];
    for (var i = 0; i < newLines.split('\n').length; i++) {
      var line = newLines.split('\n')[i];
      if (markdown.isCodeBlock(line)) {
        markdownFile.push(<div key={ i }>{ codes[ markdown.codeNumber(line) ] }</div>);
      } else {
        markdownFile.push(<div key={ i } is="markdown" className="markdown text" dangerouslySetInnerHTML={ {__html: markdown.render(line)} } />);
      }
    }

    return (
      <div is="markdown">
        <style>{`
          .text code{
            background: #eee;
            padding: 1px 5px 3px;
            border-radius: 2px;
            box-shadow: inset 0 0 0 1px rgba(0,0,0,.03);
            font-size: 85%;
            vertical-align: bottom;
          }

          .markdown p{
            margin: 15px 24px;
          }

          .markdown h1{
            font-size: 38px;
            font-weight: 200;
            color: rgba(0,0,0,.77);
            margin: 0;
            padding-top: 24px;
            padding-bottom: 5px;
            padding-left: 24px;
          }

          .markdown h2{
            font-size: 26px;
            line-height: 32px;
            font-weight: 200;
            color: rgba(0,0,0,.57);
            padding-top: 20px;
            margin-top: 0;
            margin-bottom: 10px;
            padding-left: 24px;
          }

          .markdown h3{
            font-weight: normal;
            font-size: 20px;
            color: rgba(0,0,0,.67);
            padding-left: 24px;
          }
        `}</style>

        { markdownFile }

      </div>
    );
  }
};
