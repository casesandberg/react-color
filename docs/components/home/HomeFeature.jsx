'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var ColorPicker = require('react-color');

var { Container, Grid } = require('react-basic-layout');
var { Raised } = require('react-material-design');

class HomeFeature extends ReactCSS.Component {

  constructor() {
    super();

    // this.state = {
    //   h: 174,
    //   s: 100,
    //   l: 29,
    //   a: 100,
    // };

    // this.handleChange = this.handleChange.bind(this);
  }

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

        tempPadding: {
          height: '100px',
        },

        slider: {
          paddingBottom: '40px',
        },

        split: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: '0',
          width: '100%',
        },
        compact: {
          width: '240px',
          height: '100px',
          overflow: 'hidden',
        },
      },
    };
  }

  // handleChange(data) {
  //   if (data !== this.state) {
  //     this.setState(data);
  //   }
  // }

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
                <ColorPicker type="chrome" {...this.state} />
              </div>
            </Grid>
            <div is="over">

              <Grid preset="three">
                <div is="group">
                  <div is="slider">
                    <ColorPicker type="slider" />
                  </div>
                  <div is="split">
                    <div is="compact">
                      <ColorPicker type="compact" />
                    </div>
                    <div is="material">
                      <ColorPicker type="material" />
                    </div>
                  </div>
                </div>
                <div is="swatches">
                  <ColorPicker type="swatches" />
                </div>
              </Grid>

              <div is="tempPadding" />

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
