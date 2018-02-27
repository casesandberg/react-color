import React from 'react'
import { shallow } from 'enzyme'

import DraggableRegion from './DraggableRegion'

const createEvent = (event = {}) => ({
  pageX: 20,
  pageY: 20,
  ...event,
})

test('returns location on click', () => {
  const handleChange = jest.fn()
  const container = shallow((
    <DraggableRegion onChange={ handleChange } />
  ))
  container.setState({
    top: 0,
    left: 0,
    width: 200,
    height: 100,
  })
  container.find('div').simulate('mousedown', createEvent())
  expect(handleChange).toHaveBeenCalledWith({
    top: 0,
    left: 0,
    width: 200,
    height: 100,
    insideLeft: 20,
    insideTop: 20,
    x: 0.1,
    y: 0.2,
  })
})

test('returns location on click with positioned div', () => {
  const handleChange = jest.fn()
  const container = shallow((
    <DraggableRegion onChange={ handleChange } />
  ))
  container.setState({
    top: 100,
    left: 100,
    width: 200,
    height: 100,
  })
  container.find('div').simulate('mousedown', createEvent({ pageX: 120, pageY: 120 }))
  expect(handleChange).toHaveBeenCalledWith({
    top: 100,
    left: 100,
    width: 200,
    height: 100,
    insideLeft: 20,
    insideTop: 20,
    x: 0.1,
    y: 0.2,
  })
})
