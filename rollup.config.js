import glob from 'glob'
import resolvePlugin from 'rollup-plugin-node-resolve'
import commonJsPlugin from 'rollup-plugin-commonjs'
import babelPlugin from 'rollup-plugin-babel'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

const files = glob.sync('*.js', { cwd: './src' })

const createOutput = (input, format, ext) => ({
  globals,
  name: input === 'index.js' ? 'ReactColor' : input.replace(/\.js$/, ''),
  format,
  file: `lib/${ format }/${ input.replace(/\.js$/, '').toLowerCase() }.js`,
  ...ext,
})

export default files.map((input) => ({
  input: `src/${ input }`,
  output: [
    createOutput(input, 'umd'),
    createOutput(input, 'cjs'),
    createOutput(input, 'es'),
  ],
  external: ['react'],
  plugins: [
    babelPlugin({
      exclude: ['**/node_modules/**'],
    }),
    resolvePlugin(),
    commonJsPlugin({
      exclude: ['**/node_modules/react-color/**'],
      include: ['**/node_modules/**'],
    }),
  ],
}))
