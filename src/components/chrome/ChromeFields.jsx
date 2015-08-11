'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var EditableInput = require('../common/EditableInput');

class ChromeFields extends ReactCSS.Component {

  constructor(props) {
    super();

    this.state = {
      view: 'hex',
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleViews = this.toggleViews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hideHighlight = this.hideHighlight.bind(this);
    this.showHighlight = this.showHighlight.bind(this);
  }

  classes() {
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
              boxShadow: 'inset 0 0 0 1px #dadada',
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
    };
  }

  handleChange(data) {
    this.props.onChange(data);
  }

  componentDidMount() {
    // if (this.props.a === 100 && this.state.view !== 'hex') {
    //   this.setState({ view: 'hex' });
    // } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
    //   this.setState({ view: 'rgb' });
    // }
  }

  toggleViews() {
    if (this.state.view === 'hex') {
      this.setState({ view: 'rgb' });
    } else if (this.state.view === 'rgb') {
      this.setState({ view: 'hsl' });
    } else if (this.state.view === 'hsl') {
      this.setState({ view: 'hex' });
    }
  }

  handleChange(data) {
    if (data.hex) {
      var color = tinycolor(data.hex);
      if (color.isValid()) {
        var hsl = color.toHsl();
        this.props.onChange({ h: hsl.h, s: hsl.s, l: hsl.l });
      }
    } else if (data.r || data.g || data.b) {
      var oldColor = tinycolor({ h: this.props.h, s: this.props.s, l: this.props.l}).toRgb();
      for (var key in data) {
        oldColor[key] = Number(data[key]);
      }

      var hsl = tinycolor(oldColor).toHsl();
      this.props.onChange({ h: hsl.h, s: hsl.s, l: hsl.l });
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 1) {
        data.a = 1;
      } else {
        data.a = Math.round(data.a * 100);
      }

      this.props.onChange(data);
    } else if (data.h || data.s || data.l) {
      for (var key in data) {
        data[key] = data[key].replace('%', '');
      }

      this.props.onChange(data);
    }
  }

  showHighlight() {
    React.findDOMNode(this.refs.iconHighlight).style.display = 'block';
  }

  hideHighlight() {
    React.findDOMNode(this.refs.iconHighlight).style.display = 'none';
  }

  render() {
    var color = tinycolor({ h: this.props.h, s: this.props.s, l: this.props.l });

    var fields;
    if (this.state.view === 'hex') {
      fields = <div is="fields">
        <div is="field">
          <EditableInput is="Input" label="hex" value={ color.toHexString() } onChange={ this.handleChange }/>
        </div>
      </div>;
    } else if (this.state.view === 'rgb') {
      fields = <div is="fields">
        <div is="field">
          <EditableInput is="Input" label="r" value={ color.toRgb().r } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="g" value={ color.toRgb().g } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="b" value={ color.toRgb().b } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="a" value={ this.props.a / 100 } onChange={ this.handleChange } />
        </div>
      </div>;
    } else if (this.state.view === 'hsl') {
      fields = <div is="fields">
        <div is="field">
          <EditableInput is="Input" label="h" value={ this.props.h } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="s" value={ this.props.s + '%' } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="l" value={ this.props.l + '%' } onChange={ this.handleChange } />
        </div>
        <div is="field">
          <EditableInput is="Input" label="a" value={ this.props.a / 100 } />
        </div>
      </div>;
    }

    return (
      <div is="wrap">
        { fields }
        <div is="toggle">
          <div is="icon" onClick={ this.toggleViews }>
            <svg style={{ width:'24px', height:'24px', }} viewBox="0 0 24 24" onMouseOver={ this.showHighlight } onMouseEnter={ this.showHighlight } onMouseOut={ this.hideHighlight }>
              <path fill="#333" d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />
            </svg>
          </div>
          <div is="iconHighlight" ref="iconHighlight" />
        </div>
      </div>
    );
  }

}

module.exports = ChromeFields;
