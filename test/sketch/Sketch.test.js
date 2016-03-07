'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'

import { Sketch } from '../../src/components/sketched/Sketch'

let props

describe('Sketch', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333')
    })
    const SketchComponent = TestUtils.renderIntoDocument(<Sketch {...props} />)
    SketchComponent.handleChange('#333')
    expect(props.onChange).to.have.been.called
  })

})
