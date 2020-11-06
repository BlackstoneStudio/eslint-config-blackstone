const fs = require('fs');
const { spawn } = require('child_process');

const config = {
  extends: [
    'eslint-config-blackstone',
  ],
  rules: {},
};

const dependencyInstallation = spawn(
  'npm',
  [
    'install',
    '--save-dev',
    'eslint-config-airbnb',
    'eslint@^#.#.#',
    'eslint-plugin-jsx-a11y@^#.#.#',
    'eslint-plugin-import@^#.#.#',
    'eslint-plugin-react@^#.#.#',
    'eslint-plugin-react-hooks@^#.#.#',
    'eslint-plugin-jsdoc',
  ],
);

const data = JSON.stringify(config, null, 4);
dependencyInstallation.on('exit', () => {
  fs.writeFile('.eslintrc', data, (err) => {
    if (err) {
      process.stdout.write('There was an error trying to create the eslint config file');
    } else {
      process.stdout.write('You\'re good to go macho man');
    }
  });
});

dependencyInstallation.stdout.pipe(process.stdout);
