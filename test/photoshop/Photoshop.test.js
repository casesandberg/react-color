'use strict' /* global describe beforeEach it*/

import { React, TestUtils, expect, chai, defaultProps } from '../config'

import { Photoshop } from '../../src/components/photoshop/Photoshop'

let props

describe('Photoshop', () => {
  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333')
    })
    const PhotoshopComponent = TestUtils.renderIntoDocument(<Photoshop { ...props } />)
    PhotoshopComponent.handleChange('#333')
    expect(props.onChange).to.have.been.called
  })
})
