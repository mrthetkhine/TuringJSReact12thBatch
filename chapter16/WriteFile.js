const fs = require('node:fs');
const fsPromises = require('node:fs').promises;

fsPromises.writeFile('output.txt', 'This is some sample text written to the file.')
    .then(() => {
        console.log('File written successfully');
    })
    .catch((err) => {
        console.log('Error writing file: ', err);
    });