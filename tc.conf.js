'use strict';

const {generators} = require('type-creator');

const folder = '/home/oleg/codes/oresoftware/types-depot/builds';

exports.default = {
  
  buildFolder: folder,
  
  tasks: [
    
    {
      lang: 'typescript',
      gen: generators.typescript,
      output: {folder: 'typescript', file: 'types.ts'}
    },
    
    {
      lang: 'java',
      gen: generators.java,
      output: {folder: 'java', file: 'Entities.java'}
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