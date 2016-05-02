'use strict'

import { React, ReactDOM, TestUtils, expect, chai, spies, defaultProps } from '../config'

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

  it('should render SwatchesGroup for each top-level array passed to props.colors', () => {
    const SwatchesComponent = TestUtils.renderIntoDocument(<Swatches {...props} colors={[['#333'], ['#fff'], ['#aaa'], ['#ddd']]} />)
    let groupCount = ReactDOM.findDOMNode(SwatchesComponent.refs.body).children.length

    expect(SwatchesComponent.props.colors).to.exist
    expect(groupCount).to.equal(5)
  })

})
