'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var markdown = require('../helpers/markdown');
var context = require('react-context');

var { Tile, Raised } = require('react-material-design');

class Code extends ReactCSS.Component {

  constructor() {
    super();
  }

  classes() {
    return {
      'default': {
        shortCodeBlock: {
          display: 'inline-block',
        },
        shortCode: {
          padding: '14px 16px',
        },
        head: {
          borderRadius: '2px 2px 0 0',
          background: '#fafafa',
        },
        files: {
          display: 'inline-block',
        },
        Files: {
          align: 'none',
          color: '#666',
        },
        center: {
          fontFamily: 'Monaco',
          fontSize: '14px',
          lineHeight: '19px',
          color: 'rgba(0,0,0,.77)',
        },
        numbers: {
          fontSize: '14px',
          lineHeight: '19px',
          display: 'inline-block',
          textAlign: 'right',
          color: 'rgba(0,0,0,.20)',
          userSelect: 'none',
          paddingLeft: '7px',
        },
      },
      'condensed': {
        Tile: {
          condensed: true,
        },
        center: {
          paddingTop: '16px',
          paddingBottom: '16px',
          fontSize: '13px',
          lineHeight: '15px',
          overflowX: 'scroll',
        },
        numbers: {
          paddingTop: '16px',
          fontSize: '13px',
          lineHeight: '15px',
        },
      },
    };
  }

  styles() {
    return this.css({
      'condensed': this.context.width < 500,
    });
  }

  render() {
    var code = markdown.getBody(this.props.file);
    var args = markdown.getArgs(this.props.file);
    var colorCoded = markdown.renderCode('```\n' + code + '```').trim();
    var lineCount = colorCoded.split('\n').length;

    var lines;
    if (args.lineDecoration) {
      lines = args.lineDecoration;
    } else {
      lines = [];
      for (var i = 1; i < lineCount; i++) {
        lines.push(<div key={ i }>{ i }</div>);
      }
    }

    return (
      <Raised>

        <Tile is="Tile">
          <div is="numbers">
            { lines }
          </div>
          <div is="center">
            <style>{`
              .rendered pre{
                margin: 0;
              }
              .rendered p{
                margin: 0;
              }
            `}</style>
            <div className="rendered" dangerouslySetInnerHTML={{ __html: colorCoded }} />
          </div>
        </Tile>

      </Raised>
    );
  }
}

Code.contextTypes = context.subscribe(['width']);

module.exports = Code;
