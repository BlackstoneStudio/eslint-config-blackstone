const { spawn } = require('child_process');

module.exports = (deps) => new Promise((res, rej) => {
  const installation = spawn('npm', [
    'i',
    '--save.dev',
  ].concat(deps),
  { stdio: 'inherit' });
  installation.on('error', rej);
  installation.on('exit',
    (code) => (code
      ? rej(new Error('An error ocurred during installation'))
      : res()
    ));
});
