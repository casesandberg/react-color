'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'

import { Slider } from '../../src/components/slider/Slider'

let props

describe('Slider', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333')
    })
    const SliderComponent = TestUtils.renderIntoDocument(<Slider {...props} />)
    SliderComponent.handleChange('#333')
    expect(props.onChange).to.have.been.called
  })

})
