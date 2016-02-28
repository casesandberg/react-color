'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';

import SliderSwatchComponent from '../../src/components/slider/SliderSwatch';

let props;

describe('SliderSwatch', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should pass up data with handleClick', () => {
    props.onClick = chai.spy((data) => {
      expect(JSON.stringify(data)).to.equal(JSON.stringify({
        h: 150,
        s: 0.5,
        l: ".50",
        source: 'hsl',
      }));
    });
    const SliderSwatch = TestUtils.renderIntoDocument(<SliderSwatchComponent {...props} offset=".50" />);
    SliderSwatch.handleClick();
    expect(props.onClick).to.have.been.called;
  });

  it('should pass up data when clicked', () => {
    props.onClick = chai.spy((data) => {
      expect(JSON.stringify(data)).to.equal(JSON.stringify({
        h: 150,
        s: 0.5,
        l: ".50",
        source: 'hsl',
      }));
    });
    const SliderSwatch = TestUtils.renderIntoDocument(<SliderSwatchComponent {...props} offset=".50" />);
    let swatch = SliderSwatch.refs.swatch;
    TestUtils.Simulate.click(swatch);
  });

});
