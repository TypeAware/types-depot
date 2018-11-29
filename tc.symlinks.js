'use strict';

const path = require('path');
const resolve = (...args) => path.resolve(...args);
const builds = resolve(__dirname, 'builds');
const testBuilds = resolve(__dirname, 'test', 'builds');


exports.default = {
  
  symlinks: [
    {
      src: resolve(builds, 'golang', 'entities'),
      dest: resolve(testBuilds, 'golang', 'src')
    },
    {
      src: resolve(__dirname, 'test','fixtures', 'Entities.java'),
      dest: [resolve(testBuilds, 'java', 'gson','src/main/java/suman')]
    }
  ]
  
};