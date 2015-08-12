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
          paddingTop: '30px',
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
          paddingTop: '25px',
          paddingBottom: '10px',
        },

        chrome: {
          paddingTop: '40px',
          position: 'relative',
        },
        sketch: {
          position: 'relative',
        },
        photoshop: {
          position: 'relative',
        },
        compact: {
          position: 'relative',
        },
        material: {
          position: 'relative',
        },
        swatches: {
          position: 'relative',
        },
        over: {
          position: 'absolute',
          marginTop: '40px',
        },

        under: {
          paddingTop: '125px',
        },

        slider: {
          paddingTop: '10px',
          position: 'relative',
        },

        split: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: '0',
          width: '100%',
        },

        label: {
          textAlign: 'center',
          position: 'absolute',
          width: '100%',
          color: 'rgba(0,0,0,.4)',
          fontSize: '12px',
          marginTop: '10px',
        },
        whiteLabel: {
          Extend: 'label',
          color: 'rgba(255,255,255,.7)',
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
                <div is="whiteLabel">Chrome</div>
              </div>
            </Grid>
            <div is="over">
              <Grid preset="two">
                <div is="sketch">
                  <ColorPicker type="sketch" />
                  <div is="label">Sketch</div>
                </div>
                <div is="photoshop">
                  <ColorPicker type="photoshop" />
                  <div is="label">Photoshop</div>
                </div>
              </Grid>
            </div>
          </Container>
        </div>
        <div is="under">
          <Container width={ 780 }>
            <Grid preset="three">
              <div is="group">
                <div is="slider">
                  <ColorPicker type="slider" />
                  <div is="label">Slider</div>
                </div>
                <div is="split">
                  <div is="compact">
                    <ColorPicker type="compact" />
                    <div is="label">Compact</div>
                  </div>
                  <div is="material">
                    <ColorPicker type="material" />
                    <div is="label">Material</div>
                  </div>
                </div>
              </div>
              <div is="swatches">
                <ColorPicker type="swatches" />
                <div is="label">Swatches</div>
              </div>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = HomeFeature;
