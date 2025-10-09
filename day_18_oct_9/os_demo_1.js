const os = require('os');

console.log('Arch: ', os.arch());
console.log('Arch: ', os.cpus().length);
console.log('RAM totalmem: ', os.totalmem()/1024/1024/1024 +' GB');
console.log('free RAM mem: ', os.freemem()/1024/1024/1024 +' GB');
console.log('hostname: ', os.hostname());
console.log('type: ', os.type());
console.log('platform: ', os.platform());
console.log('tmpdir: ', os.tmpdir());
console.log('uptime: ', os.uptime()/60/60);
console.log('networkInterfaces: ', os.networkInterfaces());