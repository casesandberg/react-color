'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'
import color from '../../helpers/color'
import shallowCompare from 'react-addons-shallow-compare'

import { EditableInput } from '../common'

export class ChromeFields extends ReactCSS.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  state = {
    view: '',
  }

  classes(): any {
    return {
      'default': {
        wrap: {
          paddingTop: '16px',
          display: 'flex',
        },
        fields: {
          flex: '1',
          display: 'flex',
          marginLeft: '-6px',
        },
        field: {
          paddingLeft: '6px',
          width: '100%',
        },
        toggle: {
          width: '32px',
          textAlign: 'right',
          position: 'relative',
        },
        icon: {
          marginRight: '-4px',
          marginTop: '12px',
          cursor: 'pointer',
          position: 'relative',
          zIndex: '2',
        },
        iconHighlight: {
          position: 'absolute',
          width: '24px',
          height: '28px',
          background: '#eee',
          borderRadius: '4px',
          top: '10px',
          left: '12px',
          display: 'none',
        },
        Input: {
          style: {
            input: {
              fontSize: '11px',
              color: '#333',
              width: '100%',
              borderRadius: '2px',
              border: 'none',
              boxShadow: 'inset 0px 0px 0px 1px #dadada',
              height: '21px',
              textAlign: 'center',
            },
            label: {
              textTransform: 'uppercase',
              fontSize: '11px',
              lineHeight: '11px',
              color: '#969696',
              textAlign: 'center',
              display: 'block',
              marginTop: '12px',
            },
          },
        },
      },
    }
  }

  handleChange = (data: any) => {
    this.props.onChange(data)
  }

  componentDidMount() {
    if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
      this.setState({ view: 'hex' })
    } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
      this.setState({ view: 'rgb' })
    }
  }

  toggleViews = () => {
    if (this.state.view === 'hex') {
      this.setState({ view: 'rgb' })
    } else if (this.state.view === 'rgb') {
      this.setState({ view: 'hsl' })
    } else if (this.state.view === 'hsl') {
      if (this.props.hsl.a === 1) {
        this.setState({ view: 'hex' })
      } else {
        this.setState({ view: 'rgb' })
      }
    }
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
      this.setState({ view: 'rgb' })
    }
  }

  handleChange = (data: any) => {
    if (data.hex) {
      color.isValidHex(data.hex) && this.props.onChange({
        hex: data.hex,
        source: 'hex',
      })
    } else if (data.r || data.g || data.b) {
      this.props.onChange({
        r: data.r || this.props.rgb.r,
        g: data.g || this.props.rgb.g,
        b: data.b || this.props.rgb.b,
        source: 'rgb',
      })
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0
      } else if (data.a > 1) {
        data.a = 1
      }

      this.props.onChange({
        h: this.props.hsl.h,
        s: this.props.hsl.s,
        l: this.props.hsl.l,
        a: Math.round(data.a * 100) / 100,
        source: 'rgb',
      })
    } else if (data.h || data.s || data.l) {

      this.props.onChange({
        h: data.h || this.props.hsl.h,
        s: data.s && (data.s).replace('%', '') || this.props.hsl.s,
        l: data.l && (data.l).replace('%', '') || this.props.hsl.l,
        source: 'hsl',
      })
    }
  }

  showHighlight = () => {
    this.refs.iconHighlight.style.display = 'block'
  }

  hideHighlight = () => {
    this.refs.iconHighlight.style.display = 'none'
  }

  render(): any {
    var fields
    if (this.state.view === 'hex') {
      fields = <div is="fields" className="flexbox-fix">
        <div is="field">
          <EditableInput is="Input" label="hex" value={ '#' + this.props.hex } onChange={ this.handleChange }/>
        </div>
      </div>
    } else if (this.state.view === 'rgb') {
      fields = <div is="fields" className="flexbox-fix">
        <div is="field">
          <EditableInput is="Input" label="r" value={ this.props.rgb.r } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="g" value={ this.props.rgb.g } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="b" value={ this.props.rgb.b } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="a" value={ this.props.rgb.a } arrowOffset={ .01 } onChange={ this.handleChange } />
        </div>
      </div>
    } else if (this.state.view === 'hsl') {
      fields = <div is="fields" className="flexbox-fix">
        <div is="field">
          <EditableInput is="Input" label="h" value={ Math.round(this.props.hsl.h) } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="s" value={ Math.round(this.props.hsl.s * 100) + '%' } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="l" value={ Math.round(this.props.hsl.l * 100) + '%' } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="a" value={ this.props.hsl.a } arrowOffset={ .01 } onChange={ this.handleChange } />
        </div>
      </div>
    }

    return (
      <div is="wrap" className="flexbox-fix">
        { fields }
        <div is="toggle">
          <div is="icon" onClick={ this.toggleViews } ref="icon">
            <svg style={{ width:'24px', height:'24px', }} viewBox="0 0 24 24" onMouseOver={ this.showHighlight } onMouseEnter={ this.showHighlight } onMouseOut={ this.hideHighlight }>
              <path fill="#333" d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />
            </svg>
          </div>
          <div is="iconHighlight" ref="iconHighlight" />
        </div>
      </div>
    )
  }

}

export default ChromeFields
