'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';
import ReactDOM from 'react-dom';

import ChromeFieldsComponent from '../../src/components/chrome/ChromeFields';

var props;

describe('ChromeFields', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should change state.view to hex when alpha is 1', () => {
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent {...props} />);
    expect(ChromeFields.state.view).to.eql('hex');
  });

  it('should return hex when handleChange is fired', () => {
    props.onChange = chai.spy((data) => {
      expect(data.hex).to.eql('#333');
    });
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent {...props} />);
    ChromeFields.handleChange({ hex: '#333' });
    expect(props.onChange).to.have.been.called;
  });

  it('should return objects that are keyed with the color key when handleChange is fired', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.eql({
        h: 150,
        s: 0.5,
        l: 0.2,
        a: 0.5,
        source: 'rgb',
      });
    });
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent {...props} />);
    ChromeFields.handleChange({ a: 0.5 });
    expect(props.onChange).to.have.been.called;
  });

  it('should shuffle through view value when clicking on toggle', () => {
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent {...props} />);
    const toggle = ChromeFields.refs.icon;

    expect(ChromeFields.state.view).to.eql('hex');
    TestUtils.Simulate.click(toggle);
    expect(ChromeFields.state.view).to.eql('rgb');
    TestUtils.Simulate.click(toggle);
    expect(ChromeFields.state.view).to.eql('hsl');
    TestUtils.Simulate.click(toggle);
    expect(ChromeFields.state.view).to.eql('hex');
  });

  it('should change state.view to rgb if the props change and alpha isn’t 1', () => {
    props.hsl.a = .5;
    props.hsv.a = .5;
    props.rgb.a = .5;
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent {...props} />);
    expect(ChromeFields.state.view).to.eql('rgb');
  });

});
