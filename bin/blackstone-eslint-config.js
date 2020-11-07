#!/usr/bin/env node

const fs = require('fs');
const { spawn } = require('child_process');

const config = {
  extends: [
    'eslint-config-blackstone',
  ],
  rules: {},
};
const data = JSON.stringify(config, null, 4);

const dependencyInstallation = spawn(
  'npm',
  [
    'install',
    '--save-dev',
    'eslint-config-airbnb',
    'eslint@latest',
    'eslint-plugin-jsx-a11y@latest',
    'eslint-plugin-import@latest',
    'eslint-plugin-react@latest',
    'eslint-plugin-react-hooks@latest',
    'eslint-plugin-jsdoc',
  ],
);

dependencyInstallation.stdout.pipe(process.stdout);
dependencyInstallation.stderr.pipe(process.stdout);

dependencyInstallation.on('exit', (code) => {
  if (code !== 1) {
    fs.writeFile('.eslintrc', data, (err) => {
      if (err) {
        process.stdout.write('There was an error trying to create the eslint config file\n');
      } else {
        process.stdout.write('You\'re good to go macho man\n');
      }
    });
  } else {
    process.stdout.write('An error has ocurred with npm\n');
  }
});
