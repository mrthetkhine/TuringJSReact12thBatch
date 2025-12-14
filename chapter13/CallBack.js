const fs = require('node:fs');

fs.readFile('hello.txt',function(err,data){
    fs.readFile('hello2.txt',function(err2,data2){
        console.log('Data1 ',data.toString().length);
        console.log('data2 ',data2.toString().length);
    })
});