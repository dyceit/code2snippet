const clipboardy = require('clipboardy');

clipboardy.writeSync('🦄');

const res = clipboardy.readSync();

console.log('res', res);

var args = process.argv;

console.log('args', args)
