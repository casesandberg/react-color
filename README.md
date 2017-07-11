# [React Color](http://casesandberg.github.io/react-color/)

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

* **13 Different Pickers** - Sketch, Photoshop, Chrome and many more

* **Make Your Own** - Use the building block components to make your own

![Sketch and Photoshop Color Picker Built in React](https://raw.githubusercontent.com/casesandberg/react-color/master/screenshot.png)

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
    return <SketchPicker />;
  }
}
```
You can import `AlphaPicker` `BlockPicker` `ChromePicker` `CirclePicker` `CompactPicker` `GithubPicker` `HuePicker` `MaterialPicker` `PhotoshopPicker` `SketchPicker` `SliderPicker` `SwatchesPicker` `TwitterPicker` respectively.

> 100% inline styles via [ReactCSS](http://reactcss.com/)

[travis-svg]: https://travis-ci.org/casesandberg/react-color.svg
[travis-url]: https://travis-ci.org/casesandberg/react-color
[deps-svg]: https://david-dm.org/casesandberg/react-color.svg
[deps-url]: https://david-dm.org/casesandberg/react-color
[dev-deps-svg]: https://david-dm.org/casesandberg/react-color/dev-status.svg
[dev-deps-url]: https://david-dm.org/casesandberg/react-color#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/react-color.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/react-color.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/react-color.svg
[downloads-url]: http://npm-stat.com/charts.html?package=react-color
