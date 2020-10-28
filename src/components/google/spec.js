import React from 'react'
import renderer from 'react-test-renderer'
import * as color from '../../helpers/color'
import { mount } from 'enzyme'

import Google from './Google'
import GoogleFields from './GoogleFields'
import GooglePointer from './GooglePointer'
import GooglePointerCircle from './GooglePointerCircle'


test('Google renders correctly', () => {
  const tree = renderer.create(<Google { ...color.red } />).toJSON()
  expect(tree).toMatchSnapshot()
})
test('Google onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Google { ...color.red } onChange={ changeSpy } />,
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)
})


test('GoogleFields renders correctly', () => {
  const tree = renderer.create(
    <GoogleFields { ...color.red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('GooglePointer renders correctly', () => {
  const tree = renderer.create(
    <GooglePointer />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('GooglePointerCircle renders correctly', () => {
  const tree = renderer.create(
    <GooglePointerCircle />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Google renders custom styles correctly', () => {
  const tree = renderer.create(
    <Google styles={{ default: { picker: { width: '200px' } } }} />,
  ).toJSON()
  expect(tree.props.style.width).toBe('200px')
})

test('Google renders correctly with width', () => {
  const tree = renderer.create(
    <Google width={ 200 } />,
  ).toJSON()
  expect(tree.props.style.width).toBe(200)
})

test('Google custom header correctly', () => {
  const tree = mount(
    <Google header="Change the color!!!" />,
  )
  expect(tree.instance().props.header).toBe('Change the color!!!')
})
