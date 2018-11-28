'use strict';

const cp = require('child_process');

const k = cp.spawn('bash');

k.stderr.pipe(process.stderr);
k.stdout.pipe(process.stdout);


const child = require.resolve('./child.js');

k.stdin.end(`node '${child}'`);

k.once('exit', code => {
  console.log('exiting with code', code);
});