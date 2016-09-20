'use strict' /* global describe beforeEach it*/

import { React, TestUtils, expect, chai, defaultProps } from '../config'

import { Compact } from '../../src/components/compact/Compact'
import CompactColor from '../../src/components/compact/CompactColor'
import { EditableInput } from '../../src/components/common'

let props

describe('Compact', () => {
  beforeEach(() => {
    props = defaultProps
  })

  it('should be able to take custom swatches', () => {
    const CompactComponent = TestUtils.renderIntoDocument(
      <Compact { ...props } colors={ ['#fff', '#999', '#222'] } />
    )
    const colors = TestUtils.scryRenderedComponentsWithType(CompactComponent, CompactColor)

    expect(CompactComponent.props.colors).to.exist
    expect(colors.length).to.equal(3)
  })

  it('should pass up data on change', () => {
    props.onChange = chai.spy((data) => {
      expect(data.hex).to.eql('#333')
    })
    const CompactComponent = TestUtils.renderIntoDocument(
      <Compact { ...props } colors={ ['#fff', '#999', '#222'] } />
    )
    CompactComponent.handleChange({ hex: '#333' })
    expect(props.onChange).to.have.been.called
  })

  it('should render hex with only one hash', () => {
    const CompactComponent = TestUtils.renderIntoDocument(
      <Compact { ...props } colors={ ['#fff', '#999', '#222'] } />
    )
    const hexInput = TestUtils.scryRenderedComponentsWithType(CompactComponent, EditableInput)
        .filter(input => input.props.label === 'hex')[0]
    expect(hexInput.props.value).to.equal('#194d33')
  })
})
