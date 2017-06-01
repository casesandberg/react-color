import React from 'react'
import reactCSS from 'reactcss'

export const SwatchesColor = ({ color, onClick = () => {}, first, last, active }) => {
  const styles = reactCSS({
    'default': {
      color: {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        background: color,
        marginBottom: '1px',
      },
      check: {
        fill: '#fff',
        marginLeft: '8px',
        display: 'none',
      },
    },
    'first': {
      color: {
        overflow: 'hidden',
        borderRadius: '2px 2px 0 0',
      },
    },
    'last': {
      color: {
        overflow: 'hidden',
        borderRadius: '0 0 2px 2px',
      },
    },
    'active': {
      check: {
        display: 'block',
      },
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd',
      },
      check: {
        fill: '#333',
      },
    },
  }, { first, last, active, 'color-#FFFFFF': color === '#FFFFFF' })

  const handleClick = (e) => onClick(color, e)

  return (
    <div style={ styles.color } onClick={ handleClick }>
      <div style={ styles.check }>
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      </div>
    </div>
  )
}

export default SwatchesColor
