'use strict';

import { React, TestUtils, expect, chai, spies } from '../config';

const ChromeComponent = require('../../src/components/chrome/Chrome');

var props;

describe('Chrome', function() {

  beforeEach(() => {
    props = {
      hsl: {
        h: 250,
        s: .50,
        l: .20,
        a: 1,
      },
    };
  });

  it('should call onChange when handleChange is called', function() {
    props.onChange = chai.spy(() => {});

    const Chrome = TestUtils.renderIntoDocument(React.createElement(ChromeComponent, props));

    Chrome.handleChange();

    expect(props.onChange).to.have.been.called();
  });

});
