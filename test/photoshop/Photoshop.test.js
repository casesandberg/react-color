'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';

import PhotoshopComponent from '../../src/components/photoshop/Photoshop';

let props;

describe('Photoshop', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should fire onAccept when "OK" is clicked', () => {
    props.onAccept = chai.spy(() => { });
    const Photoshop = TestUtils.renderIntoDocument(<PhotoshopComponent {...props} />);
    let accept = Photoshop.refs.accept;
    TestUtils.Simulate.click(accept);
    expect(props.onAccept).to.have.been.called;
  });

  it('should fire onCancel when "Cancel" is clicked', () => {
    props.onCancel = chai.spy(() => { });
    const Photoshop = TestUtils.renderIntoDocument(<PhotoshopComponent {...props} />);
    let cancel = Photoshop.refs.cancel;
    TestUtils.Simulate.click(cancel);
    expect(props.onCancel).to.have.been.called;
  });

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333');
    });
    const Photoshop = TestUtils.renderIntoDocument(<PhotoshopComponent {...props} />);
    Photoshop.handleChange('#333');
    expect(props.onChange).to.have.been.called;
  });

});
