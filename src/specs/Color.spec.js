
var Harness = require('react-harness');
var Color = require('./../components/Color');

module.exports = {
  label: 'Color',
  desc: 'Lorem Ipsum',

  component: Color,

  instances: {
    'default': {
      presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
    },
    'No Presets': {
      presetColors: false,
    },
  },
};
