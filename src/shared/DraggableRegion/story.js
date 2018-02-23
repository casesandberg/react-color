import React from 'react'
import { storiesOf } from '@storybook/react'

import DraggableRegion from './DraggableRegion'

storiesOf('shared', module)
  .add('DraggableRegion', () => {
    const handleChange = ({ insideTop, insideLeft }) => console.log(insideTop, insideLeft)
    return (
      <div style={{ width: 200, height: 200, display: 'flex' }}>
        <DraggableRegion onChange={ handleChange }>
          <div style={{ flex: 1, background: '#333' }} />
        </DraggableRegion>
      </div>
    )
  })
  .add('DraggableRegion Child Function', () => {
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
  .add('DraggableRegion Render Function', () => {
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
