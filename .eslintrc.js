module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-curly-spacing': [2, 'always', { spacing: { objectLiterals: 'never' }}],
    'react/prop-types': [0],
    'template-curly-spacing': ['error', 'always'],
    'strict': [0, 'safe'],
    'no-unused-expressions': 0,
    'no-unused-vars': ['error', { 'vars': 'local' }],
    'arrow-body-style': [0, 'always'],
    'camelcase': [2, { 'properties': 'always' }],
    'constructor-super': 2,
    'quote-props': [2, 'consistent'],
    'no-underscore-dangle': [1],
    'semi': [2, 'never'],
    'import/no-unresolved': [2, { ignore: ['react-reactions'] }],
    'new-cap': [0]
  }
}
