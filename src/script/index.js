#!/usr/bin/env node

const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { spawn } = require('child_process');
const { prompt } = require('enquirer');

const bases = require('./modules/base');
const frontend = require('./modules/frontend');
const typescript = require('./modules/typescript');

const { eslintconfigSetup, dependenciesSetup } = require('./utils/setup');
const base = require('./modules/base');

const buildup = async () => {
  const response = await prompt([
    {
      name: 'isFrontend',
      message: 'What kind of project are you running?\n',
      type: 'toggle',
      enabled: 'Frontend',
      disabled: 'Backend',
    },
    {
      name: 'isTypescript',
      message: 'Is your project Typescript?\n',
      type: 'toggle',
      enabled: 'Yes',
      disabled: 'No',
    },
    {
      name: 'usesNest',
      message: 'Does your project run on Nest.js?\n',
      type: 'toggle',
      enabled: 'Yes',
      disabled: 'No',
      skip() {
        return this.state.answers.isFrontend || !this.state.answers.isTypescript;
      },
    },
  ]);

  let baseConfig = bases.eslintconfig;
  let baseDependencies = bases.dependencies;

  if (response.isFrontend) {
    baseConfig = eslintconfigSetup(
      baseConfig,
      frontend,
    );
    baseDependencies = dependenciesSetup(
      baseDependencies,
      frontend,
    );
  }

  if (response.isTypescript) {
    baseConfig = eslintconfigSetup(
      baseConfig,
      typescript,
    );
    baseDependencies = dependenciesSetup(
      baseDependencies,
      typescript,
    );
  }

  console.log({
    '.eslintrc': baseConfig,
    dependencies: baseDependencies,
  });
};
module.exports = buildup;

/*

  const data = JSON.stringify(config, null, 4);
  const writeFile = () => new Promise((res, rej) => {
    fs.writeFile('.eslintrc', data, (err) => {
      if (err) {
        rej(new Error('There was an error trying to create the eslint config file\n'));
      } else {
        res('You\'re good to go macho man\n');
      }
    });
  });
  const depInstall = spawn('npm', [
    'i',
    '--save-dev',
  ].concat(basePkg),
  { stdio: 'inherit' });

  depInstall.on('error', () => {
    process.stdout.write('An error ocurred while installing\n');
  });

  depInstall.on('exit', async () => {
    try {
      const res = await writeFile();
      process.stdout.write(res);
    } catch (e) {
      process.stderr.write(e.message);
    }
  });
} else {
  process.stderr.write('Required arguments\n');
} */
