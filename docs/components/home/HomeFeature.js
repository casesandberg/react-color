'use strict'

import React from 'react'
import reactCSS from 'reactcss'

import { ChromePicker, CompactPicker, MaterialPicker, PhotoshopPicker,
         SketchPicker, SliderPicker, SwatchesPicker } from 'react-color'

import { Container, Grid } from 'react-basic-layout'
import { Raised } from 'react-material-design'
import Move from 'react-move'

class HomeFeature extends React.Component {

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

    const styles = reactCSS({
      'default': {
        graphic: {
          height: '580px',
          background: '#ddd url("images/bg-2.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        },
        logo: {
          paddingTop: '40px',
        },
        square: {
          width: '24px',
          height: '24px',
          background: 'url("images/react-color.svg")',
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
          bottom: '0px',
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
          textAlign: 'center',
          position: 'absolute',
          width: '100%',
          fontSize: '12px',
          marginTop: '10px',
          color: 'rgba(255,255,255,.7)',
        },
      },
    });

    return (
      <div style={ styles.feature }>
        <div style={ styles.graphic } ref="container">
          <Container width={ 780 }>
            <Grid preset="one">
              <div>
                <div style={ styles.logo }>
                  <div style={ styles.square } />
                </div>
                <div style={ styles.title }>React Color</div>
                <div style={ styles.subtitle }>A Collection of Color Pickers from Sketch, Photoshop, Chrome & more</div>
                <div style={ styles.star }>
                  <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-color&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>
                </div>
              </div>
              <div style={ styles.chrome }>
                <Move inDelay={ 200 } inStartTransform="translateY(10px)" inEndTransform="translateY(0)">
                  <ChromePicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                  <div style={ styles.whiteLabel }>Chrome</div>
                </Move>
              </div>
            </Grid>
            <div style={ styles.over } ref="over">
              <Move inDelay={ 400 } inStartTransform="translateY(10px)" inEndTransform="translateY(0)">
                <Grid preset="two">
                  <div style={ styles.sketch }>
                    <SketchPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                    <div style={ styles.label }>Sketch</div>
                  </div>
                  <div style={ styles.photoshop }>
                    <PhotoshopPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                    <div style={ styles.label }>Photoshop</div>
                  </div>
                </Grid>
              </Move>
            </div>
          </Container>
        </div>
        <div style={ styles.under } ref="under">
          <Container width={ 780 }>
            <Move inDelay={ 600 } inStartTransform="translateY(10px)" inEndTransform="translateY(0)">
              <Grid preset="three">
                <div style={ styles.group }>
                  <div style={ styles.slider }>
                    <SliderPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                    <div style={ styles.label }>Slider</div>
                  </div>
                  <div style={ styles.split } className="flexbox-fix">
                    <div style={ styles.compact }>
                      <CompactPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                      <div style={ styles.label }>Compact</div>
                    </div>
                    <div style={ styles.material }>
                      <MaterialPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                      <div style={ styles.label }>Material</div>
                    </div>
                  </div>
                </div>
                <div style={ styles.swatches }>
                  <SwatchesPicker color={ this.state } onChangeComplete={ this.handleChangeComplete } />
                  <div style={ styles.label }>Swatches</div>
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
