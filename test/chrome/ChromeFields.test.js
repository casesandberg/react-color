'use strict' /* global describe beforeEach it*/

import { React, TestUtils, expect, chai, defaultProps } from '../config'
import { EditableInput } from '../../src/components/common'

import ChromeFieldsComponent from '../../src/components/chrome/ChromeFields'

let props

describe('ChromeFields', () => {
  function deepCopy(o) {
    return JSON.parse(JSON.stringify(o))
  }

  beforeEach(() => {
    props = deepCopy(defaultProps)
  })

  it('should change state.view to hex when alpha is 1', () => {
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent { ...props } />)
    expect(ChromeFields.state.view).to.eql('hex')
  })

  it('should return hex when handleChange is fired', () => {
    props.onChange = chai.spy((data) => {
      expect(data.hex).to.eql('#333')
    })
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent { ...props } />)
    ChromeFields.handleChange({ hex: '#333' })
    expect(props.onChange).to.have.been.called
  })

  it('should return objects that are keyed with the color key when handleChange is fired', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.eql({
        h: 150,
        s: 0.5098039215686275,
        l: 0.19999999999999998,
        a: 0.5,
        source: 'rgb',
      })
    })
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent { ...props } />)
    ChromeFields.handleChange({ a: 0.5 })
    expect(props.onChange).to.have.been.called
  })

  it('should shuffle through view value when clicking on toggle', () => {
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent { ...props } />)
    const toggle = ChromeFields.icon

    expect(ChromeFields.state.view).to.eql('hex')
    TestUtils.Simulate.click(toggle)
    expect(ChromeFields.state.view).to.eql('rgb')
    TestUtils.Simulate.click(toggle)
    expect(ChromeFields.state.view).to.eql('hsl')
    TestUtils.Simulate.click(toggle)
    expect(ChromeFields.state.view).to.eql('hex')
  })

  it('should change state.view to rgb if the props change and alpha isn’t 1', () => {
    props.hsl.a = 0.5
    props.hsv.a = 0.5
    props.rgb.a = 0.5
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent { ...props } />)
    expect(ChromeFields.state.view).to.eql('rgb')
  })

  it('should render hex with exactly one leading hash', () => {
    const ChromeFields = TestUtils.renderIntoDocument(<ChromeFieldsComponent { ...props } />)
    expect(ChromeFields.state.view).to.eql('hex')
    const hexField = TestUtils.findRenderedComponentWithType(ChromeFields, EditableInput)
    expect(hexField.props.value).to.equal('#194d33')
  })
})
