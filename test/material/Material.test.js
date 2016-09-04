'use strict' /* global describe beforeEach it*/

import { React, TestUtils, expect, defaultProps } from '../config'

import { Material } from '../../src/components/material/Material'
import { EditableInput } from '../../src/components/common'

let props

describe('Material', () => {
  beforeEach(() => {
    props = defaultProps
  })

  it('should render hex with only one hash', () => {
    const MaterialComponent = TestUtils.renderIntoDocument(<Material { ...props } />)
    const hexInput = TestUtils.scryRenderedComponentsWithType(MaterialComponent, EditableInput)
        .filter(input => input.props.label === 'hex')[0]
    expect(hexInput.props.value).to.equal('#194d33')
  })
})
