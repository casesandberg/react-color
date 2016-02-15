'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'

import SwatchesGroupComponent from '../../src/components/swatches/SwatchesGroup'

let props

describe('SwatchesGroup', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up data onClick', () => {
    props.onClick = chai.spy((data) => {
      expect(data).to.equal('#333')
    })
    const SwatchesGroup = TestUtils.renderIntoDocument(<SwatchesGroupComponent {...props} group={['#333']} />)
    SwatchesGroup.handleClick('#333')
    expect(props.onClick).to.have.been.called
  })

  it('should render SwatchesGroupGoup for each top-level array passed to props.colors', () => {
    const SwatchesGroup = TestUtils.renderIntoDocument(<SwatchesGroupComponent {...props} group={['#333', '#fff', '#aaa', '#ddd']} />)
    let colors = SwatchesGroup.refs.group._reactInternalComponent._renderedChildren
    let colorCount = 0
    for (var color in colors) {
      colorCount += 1
    }

    expect(SwatchesGroup.props.group).to.exist
    expect(colorCount).to.equal(4)
  })

})
