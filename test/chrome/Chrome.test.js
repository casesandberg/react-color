'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';

const ChromeComponent = require('../../src/components/chrome/Chrome');

let props;

describe('Chrome', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should call onChange when handleChange is called', () => {
    props.onChange = chai.spy(() => {});

    const Chrome = TestUtils.renderIntoDocument(<ChromeComponent {...props} />);

    Chrome.handleChange();

    expect(props.onChange).to.have.been.called();
  });

});
