'use strict';

const fs = require('fs');

// const nextdoor = require.resolve('./inne/output.js');

const nextdoor = '/home/oleg/codes/oresoftware/types-depot/builds/typescript/foo2.js';
const strm = fs.createWriteStream(nextdoor);


strm.write('foop');

strm.end();