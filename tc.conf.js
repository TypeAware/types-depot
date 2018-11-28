'use strict';

const {generators} = require('type-creator/generators');

const folder = '/home/oleg/codes/oresoftware/types-depot/builds';

exports.default = {
  
  buildFolder: folder,
  
  tasks: [
  
    {
      lang: 'typescript',
      gen: generators.typescript,
      output: { folder: 'typescript' }
    },
  
    // {
    //   lang: 'java11',
    //   gen: generators.typescript,
    //   output: { folder }
    // }
    
    // java8: {
    //   output: { folder, gen: generators.ts }
    // },
    //
    // java11:{
    //   output: { folder, gen: generators.ts }
    // }
 
  ]
};