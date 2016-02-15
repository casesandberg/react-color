'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'

import PhotoshopFieldsComponent from '../../src/components/photoshop/PhotoshopFields'

let props

describe('PhotoshopFields', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up hex data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333')
    })
    const PhotoshopFields = TestUtils.renderIntoDocument(<PhotoshopFieldsComponent {...props} />)
    PhotoshopFields.handleChange({ '#': '#333' })
    expect(props.onChange).to.have.been.called
  })

})
