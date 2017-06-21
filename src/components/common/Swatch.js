import React from 'react'
import reactCSS from 'reactcss'
import { handleFocus } from '../../helpers/interaction'

import { Checkboard } from './'

const ENTER = 13

export const Swatch = ({ color, style, onClick = () => {}, onHover, title = color,
  children, focus, focusStyle = {} }) => {
  const transparent = color === 'transparent'
  const styles = reactCSS({
    default: {
      swatch: {
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none',
        ...style,
        ...(focus ? focusStyle : {}),
      },
    },
  })

  const handleClick = (e) => onClick(color, e)
  const handleKeyDown = (e) => e.keyCode === ENTER && onClick(color, e)
  const handleHover = (e) => onHover(color, e)

  let optionalEvents = {}
  if (onHover) {
    optionalEvents.onMouseOver = handleHover
  }

  return (
    <div
      style={ styles.swatch }
      onClick={ handleClick }
      title={ title }
      tabIndex={ 0 }
      onKeyDown={ handleKeyDown }
      { ...optionalEvents }
    >
      { children }
      { transparent && (
        <Checkboard
          borderRadius={ styles.swatch.borderRadius }
          boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
        />
      ) }
    </div>
  )
}

export default handleFocus(Swatch)
