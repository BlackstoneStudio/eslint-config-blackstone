module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsdoc/recommended',
    'airbnb',
  ],
  plugins: [
    'react',
    'jsdoc',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 1,
  },
};
