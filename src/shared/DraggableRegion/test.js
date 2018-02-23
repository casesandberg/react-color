import React from 'react'
import { mount } from 'enzyme'

import DraggableRegion from './DraggableRegion'

const createEvent = (event = {}) => ({
  pageX: 20,
  pageY: 20,
  ...event,
  target: {
    clientWidth: 200,
    clientHeight: 100,
    offsetLeft: 10,
    offsetTop: 10,
    scrollLeft: 0,
    scrollTop: 0,
    ...event.target,
  },
})

test('returns location on click', () => {
  const handleChange = jest.fn()
  const container = mount((
    <DraggableRegion onChange={ handleChange } />
  ))
  container.find('div').simulate('click', createEvent())
  expect(handleChange).toHaveBeenCalledWith({
    top: 10,
    left: 10,
    width: 200,
    height: 100,
  })
})

test('returns location when page is scrolled', () => {
  const handleChange = jest.fn()
  const container = mount((
    <DraggableRegion onChange={ handleChange } />
  ))
  const event = createEvent({
    view: {
      pageYOffset: 100,
      pageXOffset: 0,
    },
  })
  container.find('div').simulate('click', event)
  expect(handleChange).toHaveBeenCalledWith({
    top: 10,
    left: 10,
    width: 200,
    height: 100,
  })
})
