'use strict';

const path = require('path');
const {generators} = require('type-creator');

exports.default = {
  
  buildFolder: path.resolve(__dirname, 'builds'),
  
  tasks: [
    
    {
      lang: 'typescript',
      gen: generators.typescript,
      output: {folder: 'typescript', file: 'types.ts'},
    },
  
    {
      lang: 'golang',
      gen: generators.golang,
      output: {folder: 'golang', file: 'golang.go'},
      options: {
        packageName:'golang'
      }
    },
    
    {
      lang: 'java',
      gen: generators.java,
      output: {folder: 'java', file: 'Entities.java'},
      options:{
        jar: true
      }
    }
    
    // java8: {
    //   output: { folder, gen: generators.ts }
    // },
    //
    // java11:{
    //   output: { folder, gen: generators.ts }
    // }
  
  ]
};