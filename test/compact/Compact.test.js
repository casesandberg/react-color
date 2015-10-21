'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';

const CompactComponent = require('../../src/components/compact/Compact');

let props;

describe('Compact', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should be able to take custom swatches', () => {
    const Compact = TestUtils.renderIntoDocument(<CompactComponent {...props} colors={['#fff', '#999', '#222']} />);
    let colors = Compact.refs.colors._reactInternalComponent._renderedChildren;
    let colorCount = 0;
    for (var color in colors) {
      colorCount += 1;
    }

    expect(Compact.props.colors).to.exist;
    expect(colorCount).to.equal(4);
  });

  it('should pass up data on change', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.eql('#333');
    });
    const Compact = TestUtils.renderIntoDocument(<CompactComponent {...props} colors={['#fff', '#999', '#222']} />);
    Compact.handleChange({ hex: '#333' });
    expect(props.onChange).to.have.been.called;
  });

});
