'use strict' /* global describe beforeEach it*/

import { React, TestUtils, expect, chai, defaultProps } from '../config'

import { Chrome } from '../../src/components/chrome/Chrome'

let props

describe('Chrome', () => {
  beforeEach(() => {
    props = defaultProps
  })

  it('should call onChange when handleChange is called', () => {
    props.onChange = chai.spy(() => {})
    const ChromePicker = TestUtils.renderIntoDocument(<Chrome { ...props } />)
    ChromePicker.handleChange()
    expect(props.onChange).to.have.been.called()
  })
})
