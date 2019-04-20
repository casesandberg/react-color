import { configure } from '@storybook/react'
import '@storybook/addon-console'

const req = require.context('../../packages', true, /\.?story\.js$/)
const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module)
