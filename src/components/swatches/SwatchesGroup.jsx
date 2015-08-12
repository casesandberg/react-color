'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

var SwatchesColor = require('./SwatchesColor');

class SwatchesGroup extends ReactCSS.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  classes() {
    return {
      'default': {
        group: {
          paddingBottom: '10px',
          width: '40px',
          float: 'left',
          marginRight: '10px',
        },
      },
    };
  }

  handleClick(data) {
    this.props.onClick(data);
  }

  render() {
    var colors = [];
    for (var i = 0; i < this.props.group.length; i++) {
      var color = this.props.group[i];

      colors.push(<SwatchesColor key={ color } color={ color } active={ color.replace('#', '') === this.props.active } first={ i === 0 } last={ i === this.props.group.length - 1 } onClick={ this.handleClick } />);
    }

    return (
      <div is="group">
        { colors }
      </div>
    );
  }

}

module.exports = SwatchesGroup;
