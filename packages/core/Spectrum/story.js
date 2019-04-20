// @flow
/* eslint-disable no-console */
import React from 'react'
import { storiesOf } from '@storybook/react'

import AlphaSpectrum from './AlphaSpectrum'
import ColorSpectrum from './ColorSpectrum'
import HueSpectrum from './HueSpectrum'

storiesOf('core/AlphaSpectrum', module).add('default', () => {
  return <AlphaSpectrum value={0.2} rgb={{ r: 200, g: 20, b: 90 }} onChange={console.log} />
})

storiesOf('core/ColorSpectrum', module).add('default', () => {
  return <ColorSpectrum value={{ h: 200, s: 50, v: 50 }} onChange={({ s, v }) => console.log(s, v)} />
})

storiesOf('core/HueSpectrum', module).add('default', () => {
  return <HueSpectrum value={200} onChange={console.log} /> //
})
