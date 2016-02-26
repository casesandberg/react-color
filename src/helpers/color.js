'use strict' /* @flow */

import tinycolor from '../../modules/tinycolor2'

export default {

  simpleCheckForValidColor: function(data: any): any {
    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v']
    var checked = 0
    var passed = 0
    for (var i = 0; i < keysToCheck.length; i++) {
      var letter = keysToCheck[i]
      if (data[letter]) {
        checked++
        if (!isNaN(data[letter])) {
          passed++
        }
      }
    }

    if (checked === passed) {
      return data
    }
  },

  toState: function(data: any, oldHue: number): any {
    var color = data.hex ? tinycolor(data.hex) : tinycolor(data)
    var hsl = color.toHsl()
    var hsv = color.toHsv()
    if (hsl.s === 0) {
      hsl.h = oldHue || 0
      hsv.h = oldHue || 0
    }

    return {
      hsl: hsl,
      hex: color.toHex(),
      rgb: color.toRgb(),
      hsv: hsv,
      oldHue: data.h || oldHue || hsl.h,
      source: data.source,
    }
  },

  isValidHex: function(hex: string): boolean {
    return tinycolor(hex).isValid()
  },

}
