const fs = require('node:fs');
let start = new Date().getTime();

let data = fs.readFileSync('hello.txt');
let data2 = fs.readFileSync('hello2.txt');
let data3 = fs.readFileSync('hello2.txt');
let end = new Date().getTime();
let time = (end-start);
console.log('Time ',time);
console.log('Length ',data.toString().length);
console.log('Length ',data2.toString().length);
