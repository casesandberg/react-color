'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';

const SliderComponent = require('../../src/components/slider/Slider');

let props;

describe('Slider', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333');
    });
    const Slider = TestUtils.renderIntoDocument(<SliderComponent {...props} />);
    Slider.handleChange('#333');
    expect(props.onChange).to.have.been.called;
  });

});
