'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'

import SwatchesColorComponent from '../../src/components/swatches/SwatchesColor'

let props

describe('SwatchesColor', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should pass the color back up when clicked', () => {
    props.onClick = chai.spy((data) => {
      expect(data).to.equal('#aeee00')
    })
    const SwatchesColor = TestUtils.renderIntoDocument(<SwatchesColorComponent {...props} color="#aeee00" />)
    let color = SwatchesColor.refs.color
    TestUtils.Simulate.click(color)
  })

})
