'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';

const SwatchesComponent = require('../../src/components/swatches/Swatches');

let props;

describe('Swatches', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333');
    });
    const Swatches = TestUtils.renderIntoDocument(<SwatchesComponent {...props} />);
    Swatches.handleChange('#333');
    expect(props.onChange).to.have.been.called;
  });

  it('should render SwatchesGoup for each top-level array passed to props.colors', () => {
    const Swatches = TestUtils.renderIntoDocument(<SwatchesComponent {...props} colors={[['#333'], ['#fff'], ['#aaa'], ['#ddd']]} />);
    let groups = Swatches.refs.body._reactInternalComponent._renderedChildren;
    let groupCount = 0;
    for (var group in groups) {
      groupCount += 1;
    }

    expect(Swatches.props.colors).to.exist;
    expect(groupCount).to.equal(5);
  });

});
