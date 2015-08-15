'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var { Container, Grid } = require('react-basic-layout');
var { Raised } = require('react-material-design');
var Docs = require('react-docs');
var Code = require('../../../modules/react-docs/components/Code');

var documentation = require('../../documentation');

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
        playground: {
          background: '#ddd',
          boxShadow: 'inset 0 2px 3px rgba(0,0,0,.1)',
          position: 'relative',
          height: '200px',
          borderRadius: '4px 4px 0 0',
        },
        center: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
      },
    };
  }

  render() {
    var bottom = <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=reactcss&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>;
    return (
      <div is="body">
        <Container width={ 780 }>
          <Docs markdown={ documentation } primaryColor={ this.props.primaryColor } bottom={ bottom } />
            <Grid>
              <div />
              <div is="examples">
                <div is="playground">
                  <div is="center">More Examples</div>
                </div>
                <Code file={ "\`\`\`\nconsole.log('test');\n\`\`\`" } />
              </div>
            </Grid>
        </Container>
      </div>
    );
  }
}

module.exports = HomeDocumentation;
