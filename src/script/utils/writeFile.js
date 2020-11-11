const fs = require('fs');

module.exports = (data) => new Promise((res, rej) => {
  fs.writeFile('.eslintrc', data, (err) => {
    if (err) {
      rej(new Error('There was an error trying to create the eslint config file\n'));
    } else {
      res('You\'re good to go macho man');
    }
  });
});
