'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var { Raised } = require('react-material-design');
var CompactColor = require('./CompactColor');
var CompactFields = require('./CompactFields');

class Compact extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        Compact: {
          background: '#EBEBEB',
          radius: '4px',
        },
        compact: {
          paddingTop: '5px',
          paddingLeft: '5px',
          width: '240px',
        },

        clear: {
          clear: 'both',
        },
      },
    };
  }

  handleChange(data) {
    if (data.hex) {
      var color = tinycolor(data.hex);
      if (color.isValid()) {
        var hsl = color.toHsl();
        this.props.onChange({ h: hsl.h, s: hsl.s, l: hsl.l });
      }
    }
  }

  render() {
    var hex = tinycolor(this.props).toHex();

    var colors = [];
    for (var color of this.props.colors) {
      colors.push(<CompactColor key={ color } color={ color } active={ color.replace('#', '').toLowerCase() == hex } onClick={ this.handleChange } />);
    }

    return (
      <Raised is="Compact">
        <div is="compact">
          { colors }
          <div is="clear" />
          <CompactFields {...this.props} onChange={ this.handleChange } />
        </div>
      </Raised>
    );
  }
}

Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
           '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
           '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400',
           '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
           '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
           '#808900', '#167D00', '#0C797D', '#0062B1', '#653294', '#AB149E',],
};

module.exports = Compact;
