const fs = require('node:fs');
const fsPromises = require('node:fs').promises;

console.log('start');
/*
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if(!err)
    {
        console.log('Data '+data.toString().length);
    }
});
*/
/*
fsPromises.readFile('hello.txt', 'utf8')
    .then((data) => {
        console.log('Data '+data.toString().length);
    })
    .catch((err) => {
        console.log('Error ', err);
    });
*/
async function readFile() {
    let data = await fsPromises.readFile('hello.txt', 'utf8');
    //console.log(data);
    console.log('Data '+data.toString().length);
}
readFile();
console.log('end');