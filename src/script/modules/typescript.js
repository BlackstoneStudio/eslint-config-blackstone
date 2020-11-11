const eslintconfig = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
};

const dependencies = [
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin',
];

module.exports = {
  eslintconfig,
  dependencies,
};
