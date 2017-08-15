import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';

setOptions({
  name: 'React Color',
  url: 'http://casesandberg.github.io/react-color/',
  downPanelInRight: true,
})

addDecorator(centered);
addDecorator(withKnobs);

const req = require.context('../src/components', true, /\.?story\.js$/)
const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module);
