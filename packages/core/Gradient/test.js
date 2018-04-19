// @flow
import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { calculateOffset, GradientDef } from './Gradient'

Enzyme.configure({ adapter: new Adapter() })

describe('calculateOffset', () => {
  test('returns 0 and 100 when two values', () => {
    expect(calculateOffset({ index: 0, length: 2 })).toBe(0)
    expect(calculateOffset({ index: 1, length: 2 })).toBe(100)
  })

  test('returns 0 25 50 75 100 when five values', () => {
    expect(calculateOffset({ index: 0, length: 5 })).toBe(0)
    expect(calculateOffset({ index: 1, length: 5 })).toBe(25)
    expect(calculateOffset({ index: 2, length: 5 })).toBe(50)
    expect(calculateOffset({ index: 3, length: 5 })).toBe(75)
    expect(calculateOffset({ index: 4, length: 5 })).toBe(100)
  })
})

describe('GradientDef', () => {
  test('creates multiple stops', () => {
    const container = shallow(
      <GradientDef stops={[ '#333', '#222', '#111' ]} />
    )
    expect(container.find('stop').length).toBe(3)
    expect(container.find('stop').at(1).props()).toEqual({
      offset: '50%',
      stopColor: '#222'
    })
  })

  test('creates multiple linearGradients', () => {
    const container = mount(
      <svg>
        <GradientDef stops={[ 'rgba(0,0,0,0)', 'rgba(0,0,0,1)' ]} />
        <GradientDef stops={[ 'rgba(255,255,255,0)', 'rgba(255,255,255,1)' ]} />
      </svg>
    )
    expect(container.find('linearGradient').length).toBe(2)
    const def1Id = container.find('linearGradient').at(0).props().id
    const def2Id = container.find('linearGradient').at(1).props().id
    expect(def1Id).not.toBe(def2Id)
  })
})
