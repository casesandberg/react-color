'use strict' /* global describe beforeEach it*/

import { React, TestUtils, expect, chai, defaultProps } from '../config'

import SketchPresetColorsComponent from '../../src/components/sketch/SketchPresetColors'

let props

describe('SketchPresetColors', () => {
  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up data onClick', () => {
    props.onClick = chai.spy((data) => {
      expect(data.hex).to.equal('#333')
    })
    const SketchPresetColors = TestUtils.renderIntoDocument(
      <SketchPresetColorsComponent { ...props } />
    )
    SketchPresetColors.handleClick('#333')
    expect(props.onClick).to.have.been.called
  })
})
