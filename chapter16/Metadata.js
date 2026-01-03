const fs = require('node:fs');
const stat = fs.statSync('./Metadata.js');

console.log('isFile ',stat.isFile());
console.log('isDirectory ',stat.isDirectory());
console.log('size ',stat.size);
console.log('birthtime ',stat.birthtime);
console.log('mtime ',stat.mtime);
console.log('uid ',stat.uid);
console.log('gid ',stat.gid);
console.log('mode ',stat.mode.toString(8));