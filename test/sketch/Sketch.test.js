'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';

import SketchComponent from '../../src/components/sketch-2/Sketch';

let props;

describe('Sketch', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333');
    });
    const Sketch = TestUtils.renderIntoDocument(<SketchComponent {...props} />);
    Sketch.handleChange('#333');
    expect(props.onChange).to.have.been.called;
  });

});
