'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'

import { Photoshop } from '../../src/components/photoshop/Photoshop'

let props

describe('Photoshop', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should fire onAccept when "OK" is clicked', () => {
    props.onAccept = chai.spy(() => { })
    const PhotoshopComponent = TestUtils.renderIntoDocument(<Photoshop {...props} />)
    let accept = PhotoshopComponent.refs.accept
    TestUtils.Simulate.click(accept)
    expect(props.onAccept).to.have.been.called
  })

  it('should fire onCancel when "Cancel" is clicked', () => {
    props.onCancel = chai.spy(() => { })
    const PhotoshopComponent = TestUtils.renderIntoDocument(<Photoshop {...props} />)
    let cancel = PhotoshopComponent.refs.cancel
    TestUtils.Simulate.click(cancel)
    expect(props.onCancel).to.have.been.called
  })

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333')
    })
    const PhotoshopComponent = TestUtils.renderIntoDocument(<Photoshop {...props} />)
    PhotoshopComponent.handleChange('#333')
    expect(props.onChange).to.have.been.called
  })

})
