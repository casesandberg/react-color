'use strict';

import React from 'react';
import reactCSS from 'reactcss';
import markdown from '../helpers/markdown';

import Code from './Code';

class Markdown extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {

    const styles = reactCSS({
      'default': {
        markdown: {
          fontSize: '17px',
          lineHeight: '24px',
          color: 'rgba(0,0,0,.47)',
        },
      },
    });

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
        markdownFile.push(<div key={ i } style={ styles.markdown } className="markdown text" dangerouslySetInnerHTML={ {__html: markdown.render(line)} } />);
      }
    }

    return (
      <div style={ styles.markdown }>
        { markdownFile }
      </div>
    );
  }
};

export default Markdown;
