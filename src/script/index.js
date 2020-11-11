const { prompt } = require('enquirer');
const chalk = require('chalk');

const base = require('./modules/base');
const frontend = require('./modules/frontend');
const backend = require('./modules/backend');
const typescript = require('./modules/typescript');

const { eslintconfigSetup, dependenciesSetup } = require('./utils/setup');
const nestjs = require('./modules/nestjs');
const depsInstall = require('./utils/depsInstall');
const writeFile = require('./utils/writeFile');

module.exports = async () => {
  try {
    const response = await prompt([
      {
        name: 'isFrontend',
        message: 'What kind of project are you running?\n',
        type: 'toggle',
        enabled: 'Frontend (React, React Native...)',
        disabled: 'Backend (Node, Express, NestJS...)',
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

    let baseConfig = base.eslintconfig;
    let baseDependencies = base.dependencies;

    if (response.isFrontend) {
      baseConfig = eslintconfigSetup(
        baseConfig,
        frontend,
      );
      baseDependencies = dependenciesSetup(
        baseDependencies,
        frontend,
      );
    } else {
      baseConfig = eslintconfigSetup(
        baseConfig,
        backend,
      );
      baseDependencies = dependenciesSetup(
        baseDependencies,
        backend,
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
    if (response.usesNest) {
      baseConfig = eslintconfigSetup(
        baseConfig,
        nestjs,
      );
      baseDependencies = dependenciesSetup(
        baseDependencies,
        nestjs,
      );
    }
    const eslintrc = JSON.stringify(baseConfig, null, 4);
    process.stdout.write(chalk.green.bold('Have it your way cap\'n...'));
    await depsInstall(baseDependencies);
    process.stdout.write(chalk.yellow.bold('Deps installed, creating .eslintrc...\n'));
    const message = await writeFile(eslintrc);
    process.stdout.write(chalk.green.bold(`${message}\n`));
    process.exit(0);
  } catch (e) {
    if (!e) {
      process.stdout.write(chalk.red.bold('You must finish the setup!\n'));
    } else {
      process.stdout.write(chalk.red.bold(`${e.message}\n`));
    }
    process.exit(1);
  }
};
