
var Harness = require('react-harness');
var Color = require('./../components/Color');

Color.propTypes = {
  tabs: Harness.PropTypes.array.examples([
    [{
      label: 'cool',
      callback: function() {
        console.log('cool');
      },
    }, {
      label: 'tabs',
      callback: function() {
        console.log('tabs');
      },
    },],
    ['cool', 'tabs'], ['foo', 'bar', 'longer'], ['foo', 'bar', 'way longer', 'even', 'still'],
  ]),
  align: Harness.PropTypes.oneOf(['none', 'justify', 'left', 'center']),
  color: Harness.PropTypes.string.examples(['#fff', '#FFEB3B']),
  background: Harness.PropTypes.string.examples(['transparent', '#4A90E2']),
};

module.exports = {
  label: 'Color',
  desc: 'Lorem Ipsum',

  component: Color,

  instances: {
    'default': {
      tabs: ['foo', 'bar'],
      color: '#333',
      background: '#eee',
    },
  },
};
