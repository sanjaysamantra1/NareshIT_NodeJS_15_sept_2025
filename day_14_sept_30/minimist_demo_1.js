const minimist = require('minimist');

let args = process.argv.slice(2);
let obj = minimist(args);
console.log(obj)

