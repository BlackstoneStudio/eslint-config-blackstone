const eslintconfig = {
  env: {
    node: false,
    browser: true,
    es6: true,
    es2020: true,
  },
  extends: [
    '@blackstonestudio/eslint-config-blackstone/frontend',
    'airbnb',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
};

const dependencies = [
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
];

module.exports = {
  eslintconfig,
  dependencies,
};
