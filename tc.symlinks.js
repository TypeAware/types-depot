'use strict';

const path = require('path');
const builds = path.resolve(__dirname, 'builds');
const testBuilds = path.resolve(__dirname, 'test', 'builds');
const resolve = (...args) => path.resolve(...args);

exports.default = {
  
  symlinks: [
    {
      src: resolve(builds, 'golang', 'entities'),
      dest: resolve(testBuilds, 'golang', 'src')
    },
    {
      src: resolve(__dirname, 'test','fixtures', 'Entities.java'),
      dest: resolve(testBuilds, 'java', 'gson','src/main/java/suman')
    }
  ]
  
};