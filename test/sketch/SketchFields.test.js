'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';

import SketchFieldsComponent from '../../src/components/sketch/SketchFields';

let props;

describe('SketchFields', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333');
    });
    const SketchFields = TestUtils.renderIntoDocument(<SketchFieldsComponent {...props} />);
    SketchFields.handleChange('#333');
    expect(props.onChange).to.have.been.called;
  });

});
