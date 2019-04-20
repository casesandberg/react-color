// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import DraggableRegion from './DraggableRegion'
import { HorizontalGradient } from '../Gradient'

storiesOf('core/DraggableRegion', module)
  .add('default', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log('change', insideTop, insideLeft) // eslint-disable-line no-console
    return (
      <div style={{ display: 'flex' }}>
        <DraggableRegion onChange={handleChange}>
          {({ insideTop = 0, insideLeft = 0 }) => (
            <div style={{ background: '#333', width: 200, height: 200 }}>
              <div
                style={{
                  transform: `translate(${insideLeft - 5}px, ${insideTop - 5}px)`,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  boxShadow: 'inset 0 0 0 2px red',
                }}
              />
            </div>
          )}
        </DraggableRegion>
      </div>
    )
  })
  .add('with gradient in children', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log('change', insideTop, insideLeft) // eslint-disable-line no-console
    return (
      <div style={{ display: 'flex' }}>
        <DraggableRegion onChange={handleChange}>
          {({ insideTop = 0, insideLeft = 0 }) => (
            <div style={{ width: 200, height: 12 }}>
              <HorizontalGradient stops={['red', 'pink']} />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  transform: `translate(${insideLeft - 2}px, 0px)`,
                  width: 4,
                  height: 12,
                  backgroundColor: '#000',
                }}
              />
            </div>
          )}
        </DraggableRegion>
      </div>
    )
  })
  .add('with reset after user drag', () => {
    type State = {
      x: number,
      y: number,
    }
    class ResetPosition extends React.Component<Object, State> {
      int: IntervalID
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

      handleChange = () => ({ x, y }) => this.setState({ x, y })

      render() {
        return (
          <div style={{ display: 'flex' }}>
            <DraggableRegion x={this.state.x} y={this.state.y} onChange={this.handleChange}>
              {({ insideTop = 0, insideLeft = 0 }) => (
                <div style={{ width: 200, height: 200, background: '#333' }}>
                  <div
                    style={{
                      transform: `translate(${insideLeft - 5}px, ${insideTop - 5}px)`,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      boxShadow: 'inset 0 0 0 2px red',
                    }}
                  />
                </div>
              )}
            </DraggableRegion>
          </div>
        )
      }
    }

    return <ResetPosition />
  })
