'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class Checkboard extends ReactCSS.Component {

  constructor() {
    super();

    this.state = {
      children: [],
    };
  }

  classes() {
    return {
      'default': {
        grid: {
          Absolute: '0 0 0 0',
        },
        inside: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
        white: {
          width: this.props.size + 'px',
          height: this.props.size + 'px',
          background: '#fff',
          float: 'left',
        },
        grey: {
          width: this.props.size + 'px',
          height: this.props.size + 'px',
          background: '#e6e6e6',
          float: 'left',
        },
      },
    };
  }

  componentDidMount() {
    var grid = React.findDOMNode(this.refs.grid);
    var inside = React.findDOMNode(this.refs.inside);
    var rows = Math.ceil(grid.clientHeight / this.props.size);
    var columns = Math.ceil(grid.clientWidth / this.props.size);

    if (columns % 2 == 0) {
      columns++;
    }

    inside.style.width = columns * this.props.size + 'px';

    var children = [];
    for (var i = 0; i < rows * columns; i++) {
      if (i % 2 == 0) {
        children.push(<div key={ i } is="white" />);
      } else {
        children.push(<div key={ i } is="grey" />);
      }
    }

    this.setState({ children: children });
  }

  render() {
    return (
      <div is="grid" ref="grid">
        <div is="inside" ref="inside">
          { this.state.children }
        </div>
      </div>
    );
  }

}

Checkboard.defaultProps = {
  size: 8,
};

module.exports = Checkboard;
