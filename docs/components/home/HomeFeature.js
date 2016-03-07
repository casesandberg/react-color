'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import { ChromePicker, CompactPicker, MaterialPicker, PhotoshopPicker,
         SketchPicker, SliderPicker, SwatchesPicker } from 'react-color'

import { Container, Grid } from 'react-basic-layout'
import { Raised } from 'react-material-design'
import Move from 'react-move'

class HomeFeature extends ReactCSS.Component {

  constructor() {
    super()

    this.state = {
      h: 150,
      s: .50,
      l: .20,
      a: 1,
    }

    this.handleChangeComplete = this.handleChangeComplete.bind(this)
  }

  classes() {
    return {
      'default': {
        graphic: {
          height: '580px',
          background: '#ddd url("docs/images/bg-2.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        },
        logo: {
          paddingTop: '40px',
        },
        square: {
          width: '24px',
          height: '24px',
          background: 'url("docs/images/react-color.svg")',
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
          maxWidth: '320px',
        },
        star: {
          paddingTop: '25px',
          paddingBottom: '20px',
        },

        chrome: {
          paddingTop: '50px',
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
          width: '100%',
          marginTop: '40px',
        },

        under: {
          paddingTop: '130px',
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
    }
  }

  handleChangeComplete(data) {
    // console.log(data);
    if (data.hsl !== this.state) {
      this.setState(data.hsl)
    }

    this.props.onChange && this.props.onChange(data.hex)
  }

  componentDidMount() {
    var container = this.refs.container
    var over = this.refs.over
    var under = this.refs.under
    var containerHeight = container.getBoundingClientRect().top + container.clientHeight
    var overHeight = over.getBoundingClientRect().top + over.clientHeight

    under.style.paddingTop = overHeight - containerHeight + 50 + 'px'
  }

  render() {
    return (
      <div is="feature">
        <div is="graphic" ref="container">
          <Container width={ 780 }>
            <Grid preset="one">
              <div>
                <div is="logo">
                  <div is="square" />
                </div>
                <div is="title">React Color</div>
                <div is="subtitle">A Collection of Color Pickers from Sketch, Photoshop, Chrome & more</div>
                <div is="star">
                  <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-color&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>
                </div>
              </div>
              <div is="chrome">
                <Move inDelay={ 200 } inStartTransform="translateY(10px)" inEndTransform="translateY(0)">
                  <ChromePicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                  <div is="whiteLabel">Chrome</div>
                </Move>
              </div>
            </Grid>
            <div is="over" ref="over">
              <Move inDelay={ 400 } inStartTransform="translateY(10px)" inEndTransform="translateY(0)">
                <Grid preset="two">
                  <div is="sketch">
                    <SketchPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                    <div is="label">Sketch</div>
                  </div>
                  <div is="photoshop">
                    <PhotoshopPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                    <div is="label">Photoshop</div>
                  </div>
                </Grid>
              </Move>
            </div>
          </Container>
        </div>
        <div is="under" ref="under">
          <Container width={ 780 }>
            <Move inDelay={ 600 } inStartTransform="translateY(10px)" inEndTransform="translateY(0)">
              <Grid preset="three">
                <div is="group">
                  <div is="slider">
                    <SliderPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                    <div is="label">Slider</div>
                  </div>
                  <div is="split" className="flexbox-fix">
                    <div is="compact">
                      <CompactPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                      <div is="label">Compact</div>
                    </div>
                    <div is="material">
                      <MaterialPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                      <div is="label">Material</div>
                    </div>
                  </div>
                </div>
                <div is="swatches">
                  <SwatchesPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                  <div is="label">Swatches</div>
                </div>
              </Grid>
            </Move>
          </Container>
        </div>
      </div>
    )
  }
}

export default HomeFeature
