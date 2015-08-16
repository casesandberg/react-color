'use strict';

var React = require('react');
var ColorPicker = require('react-color');

module.exports = class Component extends React.Component {

  constructor() {
    super();
    this.state = {
      displayColorPicker: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  handleClose() {
    this.setState({ displayColorPicker: false });
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Pick Color</button>
        <ColorPicker display={ this.state.displayColorPicker } onClose={ this.handleClose } type="chrome" />
      </div>
    );
  }
};
