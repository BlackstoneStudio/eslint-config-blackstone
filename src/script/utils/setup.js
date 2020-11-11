const properties = [
  'extends',
  'plugins',
  'parser',
];

const eslintconfigSetup = (baseconfig, implemented) => {
  let config = baseconfig;
  properties.forEach((property) => {
    if (implemented.eslintconfig[property]) {
      switch (typeof implemented.eslintconfig[property]) {
        case 'string':
          config[property] = implemented.eslintconfig[property];
          break;
        case 'object':
          if (Array.isArray(implemented.eslintconfig[property])) {
            config[property] = config[property].concat(implemented.eslintconfig[property]);
          }
          break;
        default:
          break;
      }
    }
  });
  config = Object.assign(implemented.eslintconfig, config);
  return config;
};

const dependenciesSetup = (basedeps, implemented) => basedeps
  .concat(
    implemented.dependencies,
  );

module.exports = {
  eslintconfigSetup,
  dependenciesSetup,
};
