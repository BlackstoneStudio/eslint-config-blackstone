const eslintconfig = {
  extends: [
    'plugin:jsdoc/recommended',
  ],
  plugins: [
    'jsdoc',
  ],
  parser: 'babel-eslint',
};

const dependencies = [
  '@blackstonestudio/eslint-config-blackstone',
  'eslint',
  'eslint-config-airbnb',
  'eslint-plugin-import',
  'eslint-plugin-jsdoc',
  'babel-eslint',
];

module.exports = {
  eslintconfig,
  dependencies,
};
