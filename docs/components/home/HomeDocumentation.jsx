'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var { Container, Grid } = require('react-basic-layout');
var { Raised } = require('react-material-design');
var Docs = require('react-docs');
var Markdown = require('../../../modules/react-docs/lib/components/Markdown');

var documentation = require('../../documentation');
var { Button, buttonmd, Sketch, sketchmd } = require('../../../examples');

class HomeDocumentation extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        body: {
          paddingTop: '50px',
          paddingBottom: '50px',
        },
        examples: {
          paddingTop: '30px',
        },
        example: {
          paddingBottom: '40px',
        },
        playground: {
          background: '#ddd',
          boxShadow: 'inset 0 2px 3px rgba(0,0,0,.1)',
          position: 'relative',
          height: '200px',
          borderRadius: '4px 4px 0 0',
        },
        exampleButton: {
          width: '90px',
          height: '24px',
          margin: '-12px 0 0 -45px',
          position: 'absolute',
          left: '50%',
          top: '50%',
        },
        exampleSketch: {
          width: '46px',
          height: '24px',
          margin: '-12px 0 0 -23px',
          position: 'absolute',
          left: '50%',
          top: '50%',
        },
      },
    };
  }

  render() {
    var bottom = <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-color&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>;
    return (
      <div is="body">
        <Container width={ 780 }>
          <Docs markdown={ documentation } primaryColor={ this.props.primaryColor } bottom={ bottom } />
          <Grid>
            <div />
            <div is="examples">

              <div is="example">
                <div is="playground">
                  <div is="exampleButton">
                    <Button />
                  </div>
                </div>
                <Markdown>{ buttonmd }</Markdown>
              </div>


              <div is="example">
                <div is="playground">
                  <div is="exampleSketch">
                    <Sketch />
                  </div>
                </div>
                <Markdown>{ sketchmd }</Markdown>
              </div>

            </div>
          </Grid>
        </Container>
      </div>
    );
  }
}

module.exports = HomeDocumentation;
