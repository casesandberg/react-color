'use strict';

import { React, TestUtils, expect, chai, spies } from '../config';

import CompactColorComponent from '../../src/components/compact/CompactColor';

describe('CompactColor', () => {

  it('should call onClick when a color is clicked on and pass back color', () => {
    let onClick = chai.spy((data) => {
      expect(data).to.eql({ hex: '#333' });
    });
    const CompactColor = TestUtils.renderIntoDocument(<CompactColorComponent onClick={ onClick } color="#333" />);
    let color = CompactColor.refs.color;

    TestUtils.Simulate.click(color);
    expect(onClick).to.have.been.called;
  });

});
