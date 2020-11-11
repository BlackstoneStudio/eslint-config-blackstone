const eslintconfig = {
  extends: [
    'plugin:nestjs/recommended',
  ],
  plugins: [
    'nestjs',
  ],
};

const dependencies = [
  'eslint-plugin-nestjs',
];

module.exports = {
  eslintconfig,
  dependencies,
};
