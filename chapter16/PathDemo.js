const path = require('node:path');

console.log('Path Demo in Node.js');
console.log('Current file path: ', __filename   );
console.log('Current directory path: ', __dirname );
console.log('Path sep: ', path.sep);

let p = __filename;
console.log('Base name: ', path.basename(p) );
console.log('Dir name: ', path.dirname(p) );
console.log('Ext name: ', path.extname(p) );

console.log('nromalize ',path.normalize("a/b/c/../../d/"));
console.log('join ',path.join("a","b","c","..","..","d"));

console.log('resolve',path.resolve('ReadFile.js'));