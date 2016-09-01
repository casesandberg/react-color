'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import color from '../../helpers/color'
import shallowCompare from 'react-addons-shallow-compare'

import { Raised } from '../../../modules/react-material-design'
import { ColorWrap } from '../common'
import CompactColor from './CompactColor'
import CompactFields from './CompactFields'

export class Compact extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleChange = (data: any) => {
    if (data.hex) {
      color.isValidHex(data.hex) && this.props.onChange({
        hex: data.hex,
        source: 'hex',
      })
    } else {
      this.props.onChange(data)
    }
  }

  render(): any {
    const styles = reactCSS({
      'default': {
        Compact: {
          background: '#f6f6f6',
          radius: '4px',
        },
        compact: {
          paddingTop: '5px',
          paddingLeft: '5px',
          boxSizing: 'initial',
          width: '240px',
        },

        clear: {
          clear: 'both',
        },
      },
    })

    const colors = map(this.props.colors, (c) => {
      return (
        <CompactColor
          key={ c }
          color={ c }
          active={ c.toLowerCase() === this.props.hex }
          onClick={ this.handleChange }
        />
      )
    })

    return (
      <Raised style={ styles.Compact }>
        <div style={ styles.compact }>
          <div ref="colors">
            { colors }
            <div style={ styles.clear } />
          </div>
          <CompactFields { ...this.props } onChange={ this.handleChange } />
        </div>
      </Raised>
    )
  }
}

Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
           '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
           '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400',
           '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
           '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
           '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E',
         ],
}

export default ColorWrap(Compact)
