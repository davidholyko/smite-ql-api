import fs from 'fs';

import _ from 'lodash';

const appendToFile = (file, str) => {
  fs.writeFile(`./${file}`, str, { flag: 'a+' }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const writeToFile = (file, objs) => {
  appendToFile(file, '[');

  _.forEach(objs, (r) => {
    appendToFile(file, JSON.stringify(r) + ',');
  });

  appendToFile(file, ']');
};

module.exports = {
  appendToFile,
  writeToFile,
};
