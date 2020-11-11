const eslintconfig = {
  extends: [
    'plugin:jsdoc/recommended',
  ],
  plugins: [
    'jsdoc',
  ],
};

const dependencies = [
  '@blackstonestudio/eslint-config-blackstone',
  'eslint',
  'eslint-config-airbnb',
  'eslint-plugin-jsdoc',
];

module.exports = {
  eslintconfig,
  dependencies,
};
