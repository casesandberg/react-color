# [React Color](http://casesandberg.github.io/react-color/)

* **7 Different Pickers** - Sketch, Photoshop, Chrome and many more

* **Make Your Own** - Use the building block components to make your own

![Sketch and Photoshop Color Picker Built in React](http://casesandberg.github.io/react-color/screenshot.png)

## Installation & Usage

```sh
npm install react-color --save
```

### Include the Component

```js
import React from 'react';
import { SketchPicker } from 'react-color';

class Component extends React.Component {

  render() {
    return <SketchPicker type="sketch" />;
  }
}
```
You can import `ChromePicker` `CompactPicker` `MaterialPicker` `PhotoshopPicker` `SketchPicker` `SliderPicker` `SwatchesPicker` respectively.

> 100% inline styles via [ReactCSS](http://reactcss.com/)
