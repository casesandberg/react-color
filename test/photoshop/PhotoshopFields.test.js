'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'
import { EditableInput } from '../../src/components/common'

import PhotoshopFieldsComponent from '../../src/components/photoshop/PhotoshopFields'

let props

describe('PhotoshopFields', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up hex data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data.hex).to.equal('#333')
    })
    const PhotoshopFields = TestUtils.renderIntoDocument(<PhotoshopFieldsComponent {...props} />)
    PhotoshopFields.handleChange({ '#': '#333' })
    expect(props.onChange).to.have.been.called
  })

  it('should render hex without hash', () => {
    const PhotoshopFields = TestUtils.renderIntoDocument(<PhotoshopFieldsComponent {...props} />)
    let fields = TestUtils.scryRenderedComponentsWithType(PhotoshopFields, EditableInput)
    let hexField = fields.filter(field => field.props.label === '#')[0]
    expect(hexField.props.value).to.equal('194d33')
  })
})
