import React from 'react'
import reactCSS from 'reactcss'
import { handleFocus } from '../../helpers/interaction'

import Checkboard from './Checkboard'

const ENTER = 13

export const Swatch = ({ color, style, onClick = () => {}, onHover, title = color,
  children, focus, focusStyle = {}, label }) => {
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

  const handleClick = e => onClick(color, e)
  const handleKeyDown = e => e.keyCode === ENTER && onClick(color, e)
  const handleHover = e => onHover(color, e)

  const optionalEvents = {}
  if (onHover) {
    optionalEvents.onMouseOver = handleHover
  }

  return (
    <div
      style={ styles.swatch }
      onClick={ handleClick }
      title={ title }
      role="button"
      tabIndex={ 0 }
      onKeyDown={ handleKeyDown }
      {...(label && {'aria-label': label })}
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
