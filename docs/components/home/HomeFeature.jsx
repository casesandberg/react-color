'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var ColorPicker = require('react-color');

var { Container, Grid } = require('react-basic-layout');
var { Raised } = require('react-material-design');

var green = {
  h: 122,
  s: 39,
  l: 49,
  a: 100,
};

class HomeFeature extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        graphic: {
          height: '580px',
          background: 'url("http://localhost:9100/docs/images/bg-2.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        },
        logo: {
          paddingTop: '40px',
        },
        square: {
          width: '24px',
          height: '24px',
          background: 'rgba(8, 30, 6, .87)',
        },
        title: {
          paddingTop: '40px',
          fontSize: '52px',
          color: '#253727',
        },
        subtitle: {
          fontSize: '20px',
          lineHeight: '27px',
          color: '#425655',
          paddingTop: '15px',
          fontWeight: '300',
          width: '320px',
        },
        star: {
          paddingTop: '20px',
        },

        chrome: {
          paddingTop: '40px',
        },
        over: {
          position: 'absolute',
          marginTop: '40px',
        },

        under: {
          paddingTop: '100px',
        },
      },
    };
  }

  render() {
    return (
      <div is="feature">
        <div is="graphic">
          <Container width={ 780 }>
            <Grid preset="one">
              <div>
                <div is="logo">
                  <div is="square" />
                </div>
                <div is="title">React Color</div>
                <div is="subtitle">A Collection of Color Pickers from Sketch, Photoshop, Chrome & more</div>
                <div is="star">
                  <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=reactcss&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>
                </div>
              </div>
              <div is="chrome">
                <ColorPicker type="chrome"  />
              </div>
            </Grid>
            <div is="over">
              <Grid preset="two">
                <div is="sketch">
                  <ColorPicker type="sketch" />
                </div>
                <div is="photoshop">
                  <ColorPicker type="photoshop" />
                </div>
              </Grid>
            </div>
          </Container>
        </div>
        <div is="under">
          <Container width={ 780 }>
            Other Color Pickers
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = HomeFeature;
