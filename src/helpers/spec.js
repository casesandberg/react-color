/* global test, expect */

import color from './color'

test('helpers/color', () => {
  test('simpleCheckForValidColor', () => {
    test('throws on null', () => {
      const data = null
      expect(() => color.simpleCheckForValidColor(data)).to.throw(TypeError)
    })

    test('throws on undefined', () => {
      const data = undefined
      expect(() => color.simpleCheckForValidColor(data)).to.throw(TypeError)
    })

    test('no-op on number', () => {
      const data = 255
      expect(color.simpleCheckForValidColor(data)).to.equal(data)
    })

    test('no-op on NaN', () => {
      const data = NaN
      expect(color.simpleCheckForValidColor(data)).to.be.NaN
    })

    test('no-op on string', () => {
      const data = 'ffffff'
      expect(color.simpleCheckForValidColor(data)).to.equal(data)
    })

    test('no-op on array', () => {
      const data = []
      expect(color.simpleCheckForValidColor(data)).to.equal(data)
    })

    test('no-op on rgb objects with numeric keys', () => {
      const data = { r: 0, g: 0, b: 0 }
      expect(color.simpleCheckForValidColor(data)).to.equal(data)
    })

    test('no-op on an object with an r g b a h s v key mapped to a NaN value', () => {
      const data = { r: NaN }
      expect(color.simpleCheckForValidColor(data)).to.equal(data)
    })
  })

  test('toState', () => {
    test('returns an object giving a color in all formats', () => {
      expect(color.toState('red')).to.deep.equal({
        hsl: { a: 1, h: 0, l: 0.5, s: 1 },
        hex: '#ff0000',
        rgb: { r: 255, g: 0, b: 0, a: 1 },
        hsv: { h: 0, s: 1, v: 1, a: 1 },
        oldHue: 0,
        source: undefined,
      })
    })

    test('gives hex color with leading hash', () => {
      expect(color.toState('blue')).to.include({
        hex: '#0000ff',
      })
    })
  })

  test('isValidHex', () => {
    test('allows strings of length 3, 6, or 8', () => {
      expect(color.isValidHex('f')).to.be.false
      expect(color.isValidHex('ff')).to.be.false
      expect(color.isValidHex('fff')).to.be.true
      expect(color.isValidHex('ffff')).to.be.false
      expect(color.isValidHex('fffff')).to.be.false
      expect(color.isValidHex('ffffff')).to.be.true
      expect(color.isValidHex('fffffff')).to.be.false
      expect(color.isValidHex('ffffffff')).to.be.true
      expect(color.isValidHex('fffffffff')).to.be.false
      expect(color.isValidHex('ffffffffff')).to.be.false
      expect(color.isValidHex('fffffffffff')).to.be.false
      expect(color.isValidHex('ffffffffffff')).to.be.false
    })

    test('allows strings without leading hash', () => {
      // Check a sample of possible colors - doing all takes too long.
      for (let i = 0; i <= 0xffffff; i += 0x010101) {
        const hex = (`000000${ i.toString(16) }`).slice(-6)
        expect(color.isValidHex(hex)).to.be.true
      }
    })

    test('allows strings with leading hash', () => {
      // Check a sample of possible colors - doing all takes too long.
      for (let i = 0; i <= 0xffffff; i += 0x010101) {
        const hex = (`000000${ i.toString(16) }`).slice(-6)
        expect(color.isValidHex(`#${ hex }`)).to.be.true
      }
    })

    test('is case-insensitive', () => {
      expect(color.isValidHex('ffffff')).to.be.true
      expect(color.isValidHex('FfFffF')).to.be.true
      expect(color.isValidHex('FFFFFF')).to.be.true
    })

    test('does not allow non-hex characters', () => {
      expect(color.isValidHex('gggggg')).to.be.false
    })

    test('does not allow numbers', () => {
      expect(color.isValidHex(0xffffff)).to.be.false
    })
  })
})
