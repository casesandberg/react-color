'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'

import SketchPresetColorsComponent from '../../src/components/sketched/SketchPresetColors'

let props

describe('SketchPresetColors', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up data onClick', () => {
    props.onClick = chai.spy((data) => {
      expect(data).to.equal('#333')
    })
    const SketchPresetColors = TestUtils.renderIntoDocument(<SketchPresetColorsComponent {...props} />)
    SketchPresetColors.handleClick('#333')
    expect(props.onClick).to.have.been.called
  })

  it('should pass back up a color when clicked', () => {
    props.onClick = chai.spy((data) => {
      expect(data).to.equal('#000')
    })
    const SketchPresetColors = TestUtils.renderIntoDocument(<SketchPresetColorsComponent {...props} colors={['#000']} />)
    let square = SketchPresetColors.refs['#000']
    TestUtils.Simulate.click(square)
    expect(props.onClick).to.have.been.called
  })

})
