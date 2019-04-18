export default {
  picker: {
    width: 200,
    padding: 10,
    boxSizing: 'border-box',
    background: '#fff',
    borderRadius: '4px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)',
  },

  ColorSpectrum: {
    wrap: {
      height: 150,
    },
    cover: {
      position: 'absolute',
      borderRadius: 3,
      width: '100%',
      height: '100%',
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
    },
    spectrum: {
      borderRadius: 3,
      width: '100%',
    },
    picker: {
      width: 4,
      height: 4,
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.3) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px 0px 1px 2px',
      borderRadius: 2,
      marginLeft: -2,
      marginTop: -2,
    },
  },

  controls: {
    display: 'flex',
    paddingTop: 4,
    paddingBottom: 4,
    height: 24,
  },
  sliders: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  HueSpectrum: {
    cover: {
      position: 'absolute',
      borderRadius: 2,
      width: '100%',
      height: '100%',
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
    },
    spectrum: {
      height: 10,
      borderRadius: 2,
    },
    picker: {
      marginTop: 1,
      width: 4,
      borderRadius: 1,
      height: 8,
      boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
      background: '#fff',
    },
  },

  AlphaSpectrum: {
    spectrum: {
      height: 10,
      borderRadius: 2,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
    },
  },

  CurrentSwatch: {
    swatch: {
      width: 24,
      height: 24,
      marginLeft: 4,
    },
    color: {
      borderRadius: 2,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
    },
  },

  alpha: {
    position: 'relative',
    height: '10px',
    marginTop: '4px',
    overflow: 'hidden',
  },
  Alpha: {
    radius: '2px',
    shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
  },
}
