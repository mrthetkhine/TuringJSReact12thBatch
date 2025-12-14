const fs = require('node:fs');
let start = new Date();
//console.log("Start");
fs.promises.readFile('hello.txt')
           .then(data=>console.log('data ',data.toString().length))

console.log('started');