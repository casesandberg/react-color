'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'

import { Swatches } from '../../src/components/swatches/Swatches'

let props

describe('Swatches', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data.hex).to.equal('#333')
    })
    const SwatchesComponent = TestUtils.renderIntoDocument(<Swatches {...props} />)
    SwatchesComponent.handleChange('#333')
    expect(props.onChange).to.have.been.called
  })

  it('should render SwatchesGoup for each top-level array passed to props.colors', () => {
    const SwatchesComponent = TestUtils.renderIntoDocument(<Swatches {...props} colors={[['#333'], ['#fff'], ['#aaa'], ['#ddd']]} />)
    let groups = SwatchesComponent.refs.body._reactInternalComponent._renderedChildren
    let groupCount = 0
    for (var group in groups) {
      groupCount += 1
    }

    expect(SwatchesComponent.props.colors).to.exist
    expect(groupCount).to.equal(5)
  })

})
