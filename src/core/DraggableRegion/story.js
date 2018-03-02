import React from 'react'
import { storiesOf } from '@storybook/react'

import DraggableRegion from './DraggableRegion'
import { HorizontalGradient } from '../Gradient'

storiesOf('core/DraggableRegion', module)
  .add('default', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log(insideTop, insideLeft)
    return (
      <div style={{ width: 200, height: 200, display: 'flex' }}>
        <DraggableRegion onChange={ handleChange }>
          <div style={{ flex: 1, background: '#333' }} />
        </DraggableRegion>
      </div>
    )
  })
  .add('with static child', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log(insideTop, insideLeft)
    return (
      <div style={{ width: 200, height: 200, display: 'flex' }}>
        <DraggableRegion onChange={ handleChange }>
          <div style={{ flex: 1, background: '#999' }} />
        </DraggableRegion>
      </div>
    )
  })
  .add('with child function', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log(insideTop, insideLeft)
    return (
      <div style={{ width: 200, height: 200, display: 'flex' }}>
        <DraggableRegion onChange={ handleChange }>
          { ({ insideTop = 0, insideLeft = 0 }) => (
            <div style={{ flex: 1, background: '#333' }}>
              <div
                style={{
                  transform: `translate(${ insideLeft - 5 }px, ${ insideTop - 5 }px)`,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  boxShadow: 'inset 0 0 0 2px red',
                }}
              />
            </div>
          ) }
        </DraggableRegion>
      </div>
    )
  })
  .add('with render function', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log(insideTop, insideLeft)
    return (
      <div style={{ width: 200, height: 200, display: 'flex' }}>
        <DraggableRegion
          onChange={ handleChange }
          render={ ({ insideTop = 0, insideLeft = 0 }) => ( //eslint-disable-line
            <div style={{ flex: 1, background: '#333' }}>
              <div
                style={{
                  transform: `translate(${ insideLeft - 5 }px, ${ insideTop - 5 }px)`,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  boxShadow: 'inset 0 0 0 2px red',
                }}
              />
            </div>
          ) }
        />
      </div>
    )
  })
  .add('with gradient in render prop', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log(insideTop, insideLeft)
    return (
      <div style={{ width: 200, height: 12, display: 'flex' }} >
        <DraggableRegion
          onChange={ handleChange }
          render={ ({ insideTop = 0, insideLeft = 0 }) => ( //eslint-disable-line
            <div style={{ width: 200, height: 12, display: 'flex' }} >
              <HorizontalGradient stops={ ['red', 'pink'] } />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  transform: `translate(${ insideLeft - 2 }px, 0px)`,
                  width: 4,
                  height: 12,
                  backgroundColor: '#000',
                }}
              />
            </div>
          ) }
        />
      </div>
    )
  })
  .add('with reset after user drag', () => {

    class ResetPosition extends React.Component {
      state = {
        x: 0.1,
        y: 0.1,
      }

      componentDidMount() {
        this.int = setInterval(() => this.setState({ x: 0.1, y: 0.1 }), 2000)
      }

      componentWillUnmount() {
        clearInterval(this.int)
      }

      handleChange = () => ({ x, y }) => this.setState({ x, y }) //eslint-disable-line

      render() {
        return (
          <div style={{ width: 200, height: 200, display: 'flex' }}>
            <DraggableRegion
              x={ this.state.x }
              y={ this.state.y }
              onChange={ this.handleChange }
              render={ ({ insideTop = 0, insideLeft = 0 }) => ( //eslint-disable-line
                <div style={{ flex: 1, background: '#333' }}>
                  <div
                    style={{
                      transform: `translate(${ insideLeft - 5 }px, ${ insideTop - 5 }px)`,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      boxShadow: 'inset 0 0 0 2px red',
                    }}
                  />
                </div>
              ) }
            />
          </div>
        )
      }
    }

    return <ResetPosition />
  })
