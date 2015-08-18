'use strict';

var tinycolor = require('../../modules/tinycolor2');

module.exports = {

  simpleCheckForValidColor: function(data) {
    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v'];
    var checked = 0;
    var passed = 0;
    for (var i = 0; i < keysToCheck.length; i++) {
      var letter = keysToCheck[i];
      if (data[letter]) {
        checked++;
        if (!isNaN(data[letter])) {
          passed++;
        }
      }
    }

    if (checked === passed) {
      return data;
    }
  },

  toState: function(data, oldHue) {
    var color = tinycolor(data);
    var hsl = color.toHsl();
    var hsv = color.toHsv();
    if (hsl.s === 0) {
      hsl.h = oldHue;
      hsv.h = oldHue;
    }

    return {
      hsl: hsl,
      hex: color.toHex(),
      rgb: color.toRgb(),
      hsv: hsv,
      oldHue: data.h || oldHue || hsl.h,
    };
  },

  isValidHex: function(hex) {
    return tinycolor(hex).isValid();
  },

};
