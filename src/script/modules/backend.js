const eslintconfig = {
  env: {
    node: true,
    browser: false,
    es6: true,
    es2020: true,
  },
  extends: [
    'airbnb/base',
    '@blackstonestudio/eslint-config-blackstone',
  ],
  parser: 'babel-eslint',
};

const dependencies = [];

module.exports = {
  eslintconfig,
  dependencies,
};
