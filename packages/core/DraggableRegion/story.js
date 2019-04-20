// @flow
/* eslint-disable no-console */
import React from 'react'
import { storiesOf } from '@storybook/react'

import DraggableRegion from './DraggableRegion'
import { HorizontalGradient } from '../Gradient'

storiesOf('core/DraggableRegion', module)
  .add('default', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log('change', insideTop, insideLeft)
    return (
      <DraggableRegion onChange={handleChange}>
        {({ insideTop = 0, insideLeft = 0, handlers }) => (
          <div style={{ background: '#333', width: 200, height: 200 }} {...handlers}>
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
    )
  })
  .add('with gradient in children', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log('change', insideTop, insideLeft)
    return (
      <DraggableRegion onChange={handleChange}>
        {({ insideTop = 0, insideLeft = 0, handlers }) => (
          <div style={{ width: 200, height: 12 }} {...handlers}>
            <div
              style={{
                position: 'absolute',
                transform: `translate(${insideLeft - 2}px, 0px)`,
                width: 4,
                height: 12,
                backgroundColor: '#000',
              }}
            />
            <HorizontalGradient stops={['red', 'pink']} />
          </div>
        )}
      </DraggableRegion>
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
          <DraggableRegion x={this.state.x} y={this.state.y} onChange={this.handleChange}>
            {({ insideTop = 0, insideLeft = 0, handlers }) => (
              <div style={{ width: 200, height: 200, background: '#333' }} {...handlers}>
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
        )
      }
    }

    return <ResetPosition />
  })
