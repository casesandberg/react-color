import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Swatch } from '../common'
import colorUtils from '../../helpers/color'

export const GithubSwatch = ({
  hover,
  color,
  active,
  onClick,
  onSwatchHover,
}) => {
  const hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)',
  }

  const styles = reactCSS(
    {
      default: {
        swatch: {
          width: '25px',
          height: '25px',
          fontSize: '0',
        },
        check: {
          fill: colorUtils.getContrastingColor(color),
          display: 'none',
        },
      },
      active: {
        check: {
          display: 'block',
        },
      },
      hover: {
        swatch: hoverSwatch,
      },
      'color-#FFFFFF': {
        check: {
          fill: '#333',
        },
      },
      transparent: {
        check: {
          fill: '#333',
        },
      },
    },
    {
      hover,
      active,
      'color-#FFFFFF': color === '#FFFFFF',
      transparent: color === 'transparent',
    }
  )

  return (
    <div style={ styles.swatch }>
      <Swatch
        color={ color }
        onClick={ onClick }
        onHover={ onSwatchHover }
        focusStyle={ hoverSwatch }
      >
        <div style={ styles.check }>
          <svg style={{ margin: '3px' }} viewBox="0 0 25 25">
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
          </svg>
        </div>
      </Swatch>
    </div>
  )
}

export default handleHover(GithubSwatch)
