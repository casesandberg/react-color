'use strict' /* eslint import/no-unresolved: 0 */

import React from 'react'
import reactCSS from 'reactcss'

import { ChromePicker, CompactPicker, MaterialPicker, PhotoshopPicker,
         SketchPicker, SliderPicker, SwatchesPicker, BlockPicker,
         GithubPicker, TwitterPicker, HuePicker, AlphaPicker, CirclePicker } from 'react-color'

import { Container, Grid } from 'react-basic-layout'
import Move from 'react-move'

class HomeFeature extends React.Component {

  constructor() {
    super()

    this.state = {
      h: 150,
      s: 0.50,
      l: 0.20,
      a: 1,
    }

    this.handleChangeComplete = this.handleChangeComplete.bind(this)
  }

  componentDidMount() {
    const container = this.refs.container
    const over = this.refs.over
    const under = this.refs.under
    const containerHeight = container.getBoundingClientRect().top + container.clientHeight
    const overHeight = over.getBoundingClientRect().top + over.clientHeight

    under.style.paddingTop = `${ overHeight - containerHeight + 50 }px`
  }

  handleChangeComplete(data) {
    // console.log(data);
    if (data.hsl !== this.state) {
      this.setState(data.hsl)
    }

    this.props.onChange && this.props.onChange(data.hex)
  }

  render() {
    const styles = reactCSS({
      'default': {
        graphic: {
          height: '580px',
          position: 'relative',
        },
        cover: {
          absolute: '0 0 0 0',
          backgroundColor: this.props.primaryColor,
          transition: '100ms linear background-color',
          opacity: '0.5',
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
          paddingTop: '70px',
          fontSize: '52px',
          color: 'rgba(0,0,0,0.65)',
        },
        subtitle: {
          fontSize: '20px',
          lineHeight: '27px',
          color: 'rgba(0,0,0,0.4)',
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
          paddingTop: '133px',
        },

        slider: {
          paddingTop: '10px',
          position: 'relative',
        },

        split: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
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
        second: {
          marginTop: '50px',
        },

        github: {
          float: 'left',
          position: 'relative',
        },
        huealpha: {
          float: 'right',
          position: 'relative',
        },
        clear: {
          clear: 'both',
        },
        spacer: {
          height: '32px',
        },
        bottom: {
          marginTop: '40px',
        },
        twitter: {
          float: 'left',
          position: 'relative',
          marginTop: '16px',
        },
        circle: {
          float: 'right',
          position: 'relative',
        },
      },
    })

    return (
      <div style={ styles.feature }>

        <div style={ styles.graphic } ref="container">
          <div style={ styles.cover } />
          <Container width={ 780 }>
            <Grid preset="one">
              <div>
                <div style={ styles.title }>React Color</div>
                <div style={ styles.subtitle }>
                  A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github,
                  Twitter, Material Design & more
                </div>
                <div style={ styles.star }>
                  <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-color&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>
                </div>
              </div>
              <div style={ styles.chrome }>
                <Move
                  inDelay={ 200 }
                  inStartTransform="translateY(10px)"
                  inEndTransform="translateY(0)"
                >
                  <ChromePicker
                    color={ this.state }
                    onChangeComplete={ this.handleChangeComplete }
                  />
                  <div style={ styles.whiteLabel }>Chrome</div>
                </Move>
              </div>
            </Grid>
            <div style={ styles.over } ref="over">
              <Move
                inDelay={ 400 }
                inStartTransform="translateY(10px)"
                inEndTransform="translateY(0)"
              >
                <Grid preset="two">
                  <div style={ styles.sketch }>
                    <SketchPicker
                      color={ this.state }
                      onChangeComplete={ this.handleChangeComplete }
                    />
                    <div style={ styles.label }>Sketch</div>
                  </div>
                  <div style={ styles.photoshop }>
                    <PhotoshopPicker
                      color={ this.state }
                      onChangeComplete={ this.handleChangeComplete }
                    />
                    <div style={ styles.label }>Photoshop</div>
                  </div>
                </Grid>
              </Move>
            </div>
          </Container>
        </div>

        <div style={ styles.under } ref="under">
          <Container width={ 780 }>
            <Move
              inDelay={ 600 }
              inStartTransform="translateY(10px)"
              inEndTransform="translateY(0)"
            >

              <Grid preset="four">
                <div style={ styles.block }>
                  <BlockPicker
                    color={ this.state }
                    onChangeComplete={ this.handleChangeComplete }
                  />
                  <div style={ styles.label }>Block</div>
                </div>
                <div style={ styles.secondGroup }>
                  <div style={ styles.top }>
                    <div style={ styles.github }>
                      <GithubPicker
                        color={ this.state }
                        onChangeComplete={ this.handleChangeComplete }
                      />
                      <div style={ styles.label }>Github</div>
                    </div>

                    <div style={ styles.huealpha }>
                      <HuePicker
                        color={ this.state }
                        onChangeComplete={ this.handleChangeComplete }
                      />
                      <div style={ styles.label }>Hue</div>
                      <div style={ styles.spacer } />
                      <AlphaPicker
                        color={ this.state }
                        onChangeComplete={ this.handleChangeComplete }
                      />
                      <div style={ styles.label }>Alpha</div>
                    </div>
                    <div style={ styles.clear } />
                  </div>

                  <div style={ styles.bottom }>
                    <div style={ styles.twitter }>
                      <TwitterPicker
                        color={ this.state }
                        onChangeComplete={ this.handleChangeComplete }
                      />
                      <div style={ styles.label }>Twitter</div>
                    </div>
                    <div style={ styles.circle }>
                      <CirclePicker
                        color={ this.state }
                        onChangeComplete={ this.handleChangeComplete }
                      />
                      <div style={ styles.label }>Circle</div>
                    </div>
                    <div style={ styles.clear } />
                  </div>
                </div>
              </Grid>

            </Move>
          </Container>
        </div>

        <div style={ styles.second }>
          <Container width={ 780 }>
            <Grid preset="three">
              <div style={ styles.group }>
                <div style={ styles.slider }>
                  <SliderPicker
                    color={ this.state }
                    onChangeComplete={ this.handleChangeComplete }
                  />
                  <div style={ styles.label }>Slider</div>
                </div>
                <div style={ styles.split } className="flexbox-fix">
                  <div style={ styles.compact }>
                    <CompactPicker
                      color={ this.state }
                      onChangeComplete={ this.handleChangeComplete }
                    />
                    <div style={ styles.label }>Compact</div>
                  </div>
                  <div style={ styles.material }>
                    <MaterialPicker
                      color={ this.state }
                      onChangeComplete={ this.handleChangeComplete }
                    />
                    <div style={ styles.label }>Material</div>
                  </div>
                </div>
              </div>
              <div style={ styles.swatches }>
                <SwatchesPicker
                  color={ this.state }
                  onChangeComplete={ this.handleChangeComplete }
                />
                <div style={ styles.label }>Swatches</div>
              </div>
            </Grid>

          </Container>
        </div>
      </div>
    )
  }
}

export default HomeFeature
