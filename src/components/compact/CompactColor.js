import React from 'react'
import reactCSS from 'reactcss'

export const CompactColor = ({ color, onClick = () => {}, active }) => {
  const styles = reactCSS({
    'default': {
      color: {
        background: color,
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer',
      },
      dot: {
        absolute: '5px 5px 5px 5px',
        background: '#fff',
        borderRadius: '50%',
        opacity: '0',
      },
    },
    'active': {
      dot: {
        opacity: '1',
      },
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd',
      },
      dot: {
        background: '#000',
      },
    },
  }, { active, 'color-#FFFFFF': color === '#FFFFFF' })

  const handleClick = (e) => onClick({ hex: color }, e)

  return (
    <div style={ styles.color } onClick={ handleClick }>
      <div style={ styles.dot } />
    </div>
  )
}

export default CompactColor
