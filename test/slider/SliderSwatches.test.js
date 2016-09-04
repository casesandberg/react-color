'use strict' /* global describe beforeEach it*/

import { React, TestUtils, expect, chai, defaultProps } from '../config'

import SliderSwatchesComponent from '../../src/components/slider/SliderSwatches'

let props

describe('SliderSwatches', () => {
  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up data onClick', () => {
    props.onClick = chai.spy((data) => {
      expect(data).to.equal('#333')
    })
    const SliderSwatches = TestUtils.renderIntoDocument(<SliderSwatchesComponent { ...props } />)
    SliderSwatches.handleClick('#333')
    expect(props.onClick).to.have.been.called
  })
})
