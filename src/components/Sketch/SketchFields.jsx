'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var EditableInput = require('../common/EditableInput');

class ShetchFields extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        fields: {
          display: 'flex',
          paddingTop: '4px',
        },
        single: {
          flex: '1',
          paddingLeft: '6px',
        },
        double: {
          flex: '2',
        },
        label: {
          display: 'block',
          textAlign: 'center',
          fontSize: '12px',
          color: '#222',
          paddingTop: '4px',
          paddingBottom: '4px',
        },
      },
    };
  }

  render() {
    var color = tinycolor({ h: this.props.h, s: this.props.s, l: this.props.l, a: this.props.a });

    return (
      <div is="fields">
        <div is="double">
          <EditableInput value={ color.toHexString().replace('#', '') } />
          <span is="label">Hex</span>
        </div>
        <div is="single">
          <EditableInput value={ color.toRgb().r } />
          <span is="label">R</span>
        </div>
        <div is="single">
          <EditableInput value={ color.toRgb().g } />
          <span is="label">G</span>
        </div>
        <div is="single">
          <EditableInput value={ color.toRgb().b } />
          <span is="label">B</span>
        </div>
        <div is="single">
          <EditableInput value={ color.toRgb().a * 100 } />
          <span is="label">A</span>
        </div>
      </div>
    );
  }

}

module.exports = ShetchFields;
