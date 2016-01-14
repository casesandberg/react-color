# [React Color](http://casesandberg.github.io/react-color/)

* **7 Different Pickers** - Sketch, Photoshop, Chrome and many more

* **Popup or Block** - It can be used it as a popup or always visible

* **Make Your Own** - Use the building block components to make your own

![Sketch and Photoshop Color Picker Built in React](http://casesandberg.github.io/react-color/screenshot.png)

## Installation & Usage

```sh
npm install react-color --save
```

### Include the Component

```js
var React = require('react');
var ColorPicker = require('react-color');

class Component extends React.Component {

  render() {
    return <ColorPicker type="sketch" />;
  }
}
```

### Display It
Display the color picker popup on click, or don't define display and it will always be visible.

```js
var React = require('react');
var ColorPicker = require('react-color');

class Component extends React.Component {

  constructor() {
    super();
    this.state = {
      displayColorPicker: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Pick Color</button>
        <ColorPicker display={ this.state.displayColorPicker } type="sketch" />
      </div>
    );
  }
}
```

> 100% inline styles via [ReactCSS](http://reactcss.com/)
